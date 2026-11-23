"""Local validation only: serve root's assembled static bundle at its Pages base."""
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import urlsplit, unquote
import argparse
parser=argparse.ArgumentParser();parser.add_argument('--port',type=int,default=7521);parser.add_argument('--source',action='store_true');args=parser.parse_args()
repo=Path(__file__).resolve().parent.parent
root=(repo if args.source else repo/'deploy').resolve()
class Handler(SimpleHTTPRequestHandler):
 def translate_path(self,path):
  path=unquote(urlsplit(path).path)
  if not path.startswith('/daily-app2/'):return str(root/'__missing__')
  relative=path.removeprefix('/daily-app2/')
  parts=relative.split('/',1)
  if args.source and parts[0] and (root/parts[0]/'dist').is_dir():relative=parts[0]+'/dist/'+(parts[1] if len(parts)>1 else '')
  target=(root/relative).resolve()
  return str(target if target.is_relative_to(root) else root/'__missing__')
print(f'Static production validation: http://127.0.0.1:{args.port}/daily-app2/20261124-4/',flush=True)
ThreadingHTTPServer(('127.0.0.1',args.port),Handler).serve_forever()
