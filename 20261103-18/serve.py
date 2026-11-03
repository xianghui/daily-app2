"""Serve built production app; --staged serves the combined root deploy output."""
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
import argparse
parser=argparse.ArgumentParser();parser.add_argument('--staged',action='store_true');parser.add_argument('--port',type=int,default=5808);args=parser.parse_args()
root=Path(__file__).resolve().parent.parent
class Handler(SimpleHTTPRequestHandler):
 def translate_path(self,path):
  path=path.split('?')[0]
  prefix='/daily-app2/20261103-18/'
  if args.staged:return str(root/'deploy'/path.removeprefix('/daily-app2/').lstrip('/'))
  if path.startswith(prefix):return str(root/'20261103-18/dist'/path[len(prefix):])
  return str(root/path.removeprefix('/daily-app2/').lstrip('/'))
 def log_message(self,*args):pass
ThreadingHTTPServer(('127.0.0.1',args.port),Handler).serve_forever()
