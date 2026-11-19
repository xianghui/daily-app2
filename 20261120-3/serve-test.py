from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import unquote
ROOT=Path(__file__).resolve().parent.parent
class Handler(SimpleHTTPRequestHandler):
 def translate_path(self,path):
  p=unquote(path.split('?',1)[0]).removeprefix('/daily-app2/')
  if p.startswith('20261120-3/'):
   return str(ROOT/'20261120-3/dist'/p.removeprefix('20261120-3/'))
  parts=p.split('/',1)
  if len(parts)==2 and (ROOT/parts[0]/'dist'/parts[1]).exists():return str(ROOT/parts[0]/'dist'/parts[1])
  return str(ROOT/p)
 def log_message(self,*a):pass
ThreadingHTTPServer(('127.0.0.1',7021),Handler).serve_forever()
