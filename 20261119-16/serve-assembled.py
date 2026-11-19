from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import unquote,urlparse
root=Path(__file__).resolve().parent.parent/'deploy'
class H(SimpleHTTPRequestHandler):
 def translate_path(self,path):
  return str(root/unquote(urlparse(path).path).removeprefix('/daily-app2/'))
ThreadingHTTPServer(('127.0.0.1',6995),H).serve_forever()
