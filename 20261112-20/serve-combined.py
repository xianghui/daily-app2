import http.server
class H(http.server.SimpleHTTPRequestHandler):
 def translate_path(self,path):
  return '/Volumes/ExternalHD/daily_app2/deploy/'+path.split('?',1)[0].removeprefix('/daily-app2/')
http.server.ThreadingHTTPServer(('127.0.0.1',6521),H).serve_forever()
