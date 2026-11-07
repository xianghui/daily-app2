from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from pathlib import Path
class Handler(SimpleHTTPRequestHandler):
 def translate_path(self,path):
  s=path.split('?',1)[0].removeprefix('/daily-app2/')
  if s in ('','/'):s='index.html'
  return str(Path('../deploy')/s)
ThreadingHTTPServer(('127.0.0.1',6199),Handler).serve_forever()
