var recolt : AudioClip;

function OnTriggerEnter(collisionInfo : Collider){	if(collisionInfo.gameObject.tag == "ennemy"){		EnnemyCollect.force++;		audio.PlayOneShot(recolt);		Destroy(collisionInfo.gameObject);		}}

@script RequireComponent(AudioSource)