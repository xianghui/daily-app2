from http.server import SimpleHTTPRequestHandler,ThreadingHTTPServer
from pathlib import Path
class Handler(SimpleHTTPRequestHandler):
 def translate_path(self,path):
  return str(Path.cwd().parent/'deploy'/path.split('?')[0].removeprefix('/daily-app2/'))
ThreadingHTTPServer(('127.0.0.1',6446),Handler).serve_forever()
