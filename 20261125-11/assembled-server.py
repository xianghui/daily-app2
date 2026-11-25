from http.server import SimpleHTTPRequestHandler,ThreadingHTTPServer
from pathlib import Path
class H(SimpleHTTPRequestHandler):
 def translate_path(self,path):
  q=path.split('?',1)[0].removeprefix('/daily-app2/');return str(Path('/Volumes/ExternalHD/daily_app2/deploy')/q)
 def log_message(self,*args):pass
ThreadingHTTPServer(('127.0.0.1',7602),H).serve_forever()
