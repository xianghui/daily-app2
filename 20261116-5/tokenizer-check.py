import urllib.request,json
u='https://huggingface.co/Xenova/all-MiniLM-L6-v2/resolve/main/tokenizer_config.json'
d=json.load(urllib.request.urlopen(u));assert d['model_max_length']==512
json.dump({'url':u,'modelMaxLength':d['model_max_length'],'sourceDescriptionCharLimit':300,'pipelineMaxLengthHintNotClaimedAsEnforcedCap':True},open('tokenizer-validation.json','w'),indent=2)
print('PASS actual tokenizer configured maximum 512')
