from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from pathlib import Path
class Handler(SimpleHTTPRequestHandler):
 def __init__(self,*args,**kwargs):super().__init__(*args,directory=str(Path(__file__).resolve().parent.parent/'deploy'),**kwargs)
 def do_GET(self):
  if not self.path.startswith('/daily-app2/'):
   self.send_error(404);return
  self.path=self.path[len('/daily-app2'):]
  return super().do_GET()
ThreadingHTTPServer(('127.0.0.1',6008),Handler).serve_forever()
