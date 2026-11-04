from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import unquote,urlparse
root=Path(__file__).resolve().parent.parent/'deploy'
class Handler(SimpleHTTPRequestHandler):
 def translate_path(self,path):
  p=unquote(urlparse(path).path)
  if not p.startswith('/daily-app2/') or '..' in p.split('/'):return '/tmp/no-reciprocal-roof-route'
  return str(root/p[len('/daily-app2/'):])
 def log_message(self,*args):pass
ThreadingHTTPServer(('127.0.0.1',5897),Handler).serve_forever()
