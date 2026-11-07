from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from pathlib import Path
class Handler(SimpleHTTPRequestHandler):
 def translate_path(self,path):
  prefix='/daily-app2/20261107-11/'
  if path.startswith('/daily-app2/20261107-2/'):
   return str(Path('../20261107-2/dist')/path.split('?',1)[0].removeprefix('/daily-app2/20261107-2/'))
  return str(Path('dist')/path.split('?',1)[0].removeprefix(prefix)) if path.startswith(prefix) else str(Path('dist')/'index.html')
ThreadingHTTPServer(('127.0.0.1',6191),Handler).serve_forever()
