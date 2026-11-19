from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from pathlib import Path
root=Path(__file__).resolve().parent.parent
class H(SimpleHTTPRequestHandler):
 def translate_path(self,path):
  from urllib.parse import urlparse,unquote
  rel=unquote(urlparse(path).path).removeprefix('/daily-app2/');parts=rel.split('/')
  if len(parts)>1 and (root/parts[0]/'dist').is_dir(): return str(root/parts[0]/'dist'/'/'.join(parts[1:]))
  return str(root/rel)
ThreadingHTTPServer(('127.0.0.1',6983),H).serve_forever()
