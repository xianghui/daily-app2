"""Serve production files with the real /daily-app2/ base, without chdir.
Run from the app folder: python3 serve-built.py [--assembled] [--port PORT]
Assembly mode requires root npm run predeploy to have completed first.
"""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import argparse
parser=argparse.ArgumentParser(description=__doc__)
parser.add_argument('--assembled',action='store_true')
parser.add_argument('--port',type=int)
args=parser.parse_args()
app=Path(__file__).resolve().parent
repo=app.parent
root=repo/'deploy' if args.assembled else repo
class Handler(SimpleHTTPRequestHandler):
 def __init__(self,*a,**kw):super().__init__(*a,directory=str(root),**kw)
 def translate_path(self,path):
  path=path.removeprefix('/daily-app2')
  if not args.assembled:
   for folder in [app.name,'20261115-6','20261107-2']:
    prefix='/'+folder+'/'
    if path.startswith(prefix):
     path=path.replace(prefix,prefix+'dist/',1)
     break
  return super().translate_path(path)
port=args.port or (7781 if args.assembled else 7779)
print('Production test origin: http://127.0.0.1:'+str(port)+'/daily-app2/'+app.name+'/',flush=True)
ThreadingHTTPServer(('127.0.0.1',port),Handler).serve_forever()
