from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import unquote,urlparse
root=Path(__file__).resolve().parent.parent/'deploy'
class Handler(SimpleHTTPRequestHandler):
 def translate_path(self,path):
  p=unquote(urlparse(path).path)
  if not p.startswith('/daily-app2/'):return '/tmp/golomb-combined-not-found'
  target=(root/p[len('/daily-app2/'):]).resolve()
  return str(target) if target==root or root in target.parents else '/tmp/golomb-combined-not-found'
 def log_message(self,*args):pass
ThreadingHTTPServer(('127.0.0.1',5875),Handler).serve_forever()
