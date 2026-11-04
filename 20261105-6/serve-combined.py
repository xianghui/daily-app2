from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import urlparse,unquote
root=Path(__file__).resolve().parent.parent/'deploy'
class Handler(SimpleHTTPRequestHandler):
 def translate_path(self,path):
  p=unquote(urlparse(path).path)
  if p.startswith('/daily-app2/'):
   q=(root/p[len('/daily-app2/'):]).resolve()
   if q.is_relative_to(root.resolve()): return str(q)
  return '/tmp/nipkow-no-resource'
 def log_message(self,*args):pass
ThreadingHTTPServer(('127.0.0.1',5947),Handler).serve_forever()
