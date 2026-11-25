from http.server import SimpleHTTPRequestHandler,ThreadingHTTPServer
from pathlib import Path
class H(SimpleHTTPRequestHandler):
 def translate_path(self,path):
  return str(Path('/Volumes/ExternalHD/daily_app2/deploy')/path.split('?',1)[0].removeprefix('/daily-app2/'))
 def log_message(self,*args):pass
ThreadingHTTPServer(('127.0.0.1',7613),H).serve_forever()
