import urllib.request,json
u='https://huggingface.co/Xenova/all-MiniLM-L6-v2/resolve/main/tokenizer_config.json'
r=json.load(urllib.request.urlopen(u));assert r['model_max_length']==512
json.dump({'model':'Xenova/all-MiniLM-L6-v2','tokenizer_max_length':r['model_max_length'],'pipelineRequestedMaxLength':256,'documentedEffectiveCap':512,'inputCharCapPerEmbeddedText':200},open('model-context-validation.json','w'),indent=2)
