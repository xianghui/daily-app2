from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from pathlib import Path
class Handler(SimpleHTTPRequestHandler):
 def translate_path(self,path):
  return str(Path('../deploy')/path.split('?',1)[0].removeprefix('/daily-app2/'))
ThreadingHTTPServer(('127.0.0.1',6314),Handler).serve_forever()
