from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import unquote
import sys
root=Path(__file__).resolve().parent.parent
class H(SimpleHTTPRequestHandler):
 def translate_path(self,path):
  path=unquote(path.split('?')[0]).removeprefix('/daily-app2/');part=Path(path)
  if '..' in part.parts:return '/nonexistent'
  if sys.argv[1]=='7377':return str(root/'deploy'/path)
  if part.parts and (root/part.parts[0]/'dist').exists():return str(root/part.parts[0]/'dist'/Path(*part.parts[1:]))
  return str(root/path)
 def log_message(self,*a):pass
ThreadingHTTPServer(('127.0.0.1',int(sys.argv[1])),H).serve_forever()
