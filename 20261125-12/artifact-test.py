import json,csv,hashlib,base64,wave,io,re,sys
from pathlib import Path
prefix=sys.argv[1] if len(sys.argv)>1 else ''
count=0
for name in ['raw','reviewed','escaped','held','undo','max']:
 r=json.load(open(prefix+name+'.json'));assert r['schema']=='clip-scribe/v1';n=len(r['items']);assert 1<=n<=6
 for x in r['items']:
  audio=base64.b64decode(x['source']['originalAudio'],validate=True);assert hashlib.sha256(audio).hexdigest()==x['source']['sha256'];assert len(audio)==x['source']['bytes']
  w=wave.open(io.BytesIO(audio));assert (w.getnchannels(),w.getsampwidth(),w.getframerate())==(1,2,16000);assert round(w.getnframes()/16)==x['source']['durationMs'];assert x['endMs']-x['startMs']==x['source']['durationMs'];count+=6
 for i in range(1,n):assert r['items'][i]['startMs']==r['items'][i-1]['endMs']+r['gapMs'];count+=1
 if Path(prefix+name+'.csv').exists():
  rows=list(csv.DictReader(open(prefix+name+'.csv',newline='')));assert len(rows)==n
  for x,y in zip(r['items'],rows):
   for k in ['id','title','decision','transcript','note','reference']:
    v=x[k];assert y[k]==("'"+v if re.match(r'^[=+\-@\t\r]',v) else v);count+=1
   assert y['sha256']==x['source']['sha256'];count+=1
 if Path(prefix+name+'.vtt').exists():
  # Independent Python webvtt parser, and browser TextTrack tested separately.
  import webvtt
  cues=list(webvtt.read(prefix+name+'.vtt'));approved=[x for x in r['items'] if x['decision']=='approve'];assert len(cues)==len(approved);count+=1
  import html
  for cue,x in zip(cues,approved):
   expected=re.sub(r'\n[ \t]*\n','\n',x['transcript'].replace('\r\n','\n').replace('\r','\n').strip());assert html.unescape(cue.raw_text)==expected
   def ms(s):
    h,m,rest=s.split(':');sec,milli=rest.split('.');return int(h)*3600000+int(m)*60000+int(sec)*1000+int(milli)
   assert ms(cue.start)==x['startMs'];assert ms(cue.end)==x['endMs'];count+=3
assert json.load(open(prefix+'reviewed.json'))['metrics']['reviewedWordEdits']==0
Path(prefix+'artifact-validation.json').write_text(json.dumps({'assertions':count,'independentParsers':['Python csv','Python wave','Python webvtt-py','hashlib SHA-256']},indent=2));print('PASS',count,'independent artifact assertions')
