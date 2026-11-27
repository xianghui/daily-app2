import http.server,functools
from pathlib import Path
app=Path(__file__).resolve().parent;root=app.parent
class Handler(http.server.SimpleHTTPRequestHandler):
 def translate_path(self,path):
  path=path.split('?')[0].removeprefix('/daily-app2/')
  if path.startswith('20261127-21/'):
   return str(app/'dist'/path.removeprefix('20261127-21/'))
  return str(root/'deploy'/path)
http.server.ThreadingHTTPServer(('127.0.0.1',7811),Handler).serve_forever()
