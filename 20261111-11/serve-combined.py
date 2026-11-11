from http.server import SimpleHTTPRequestHandler,ThreadingHTTPServer
from pathlib import Path
class Handler(SimpleHTTPRequestHandler):
 def translate_path(self,path):
  p=path.split('?')[0].removeprefix('/daily-app2/')
  if False:
   return str(Path.cwd()/'dist'/p.removeprefix('20261111-11/'))
  return str(Path.cwd().parent/'deploy'/p)
ThreadingHTTPServer(('127.0.0.1',6441),Handler).serve_forever()
