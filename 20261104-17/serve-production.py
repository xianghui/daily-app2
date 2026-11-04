from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from pathlib import Path
root=Path(__file__).resolve().parent.parent
class Handler(SimpleHTTPRequestHandler):
 def translate_path(self,path):
  from urllib.parse import urlparse,unquote
  p=unquote(urlparse(path).path)
  if p.startswith('/daily-app2/20261104-17/'): return str(root/'20261104-17/dist'/p[len('/daily-app2/20261104-17/'):])
  if p in ['/daily-app2/','/daily-app2/index.html']: return str(root/'index.html')
  return '/tmp/napier-not-found'
 def log_message(self,*args):pass
ThreadingHTTPServer(('127.0.0.1',5887),Handler).serve_forever()
