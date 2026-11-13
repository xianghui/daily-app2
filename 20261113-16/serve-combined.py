import http.server,functools
class Handler(http.server.SimpleHTTPRequestHandler):
 def translate_path(self,path):return super().translate_path(path.removeprefix('/daily-app2'))
handler=functools.partial(Handler,directory='/Volumes/ExternalHD/daily_app2/deploy')
http.server.ThreadingHTTPServer(('127.0.0.1',6757),handler).serve_forever()
