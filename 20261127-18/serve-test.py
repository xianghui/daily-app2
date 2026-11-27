"""Serve the root combined production tree at its real /daily-app2/ base."""
import argparse, functools, http.server
from pathlib import Path
parser=argparse.ArgumentParser();parser.add_argument('--port',type=int,default=7800);args=parser.parse_args()
root=Path(__file__).resolve().parent.parent/'deploy'
if not (root/'20261127-18/index.html').exists():raise SystemExit('Run repository ROOT npm run predeploy first')
class Handler(http.server.SimpleHTTPRequestHandler):
 def do_GET(self):
  if self.path.startswith('/daily-app2/'):
   self.path=self.path.removeprefix('/daily-app2')
  super().do_GET()
 def do_HEAD(self):
  if self.path.startswith('/daily-app2/'):
   self.path=self.path.removeprefix('/daily-app2')
  super().do_HEAD()
http.server.ThreadingHTTPServer(('127.0.0.1',args.port),functools.partial(Handler,directory=str(root))).serve_forever()
