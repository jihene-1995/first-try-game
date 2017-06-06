var recolt : AudioClip;
var end : AudioClip;

function OnControllerColliderHit(hit: ControllerColliderHit){
	if(hit.gameObject.tag == "ogre" && EnnemyCollect.force == 4){
		audio.PlayOneShot(end);
		Destroy(hit.gameObject);
	}
}

function OnTriggerEnter(collisionInfo : Collider){	if(collisionInfo.gameObject.tag == "ennemy"){		EnnemyCollect.force++;		audio.PlayOneShot(recolt);		Destroy(collisionInfo.gameObject);		}}

@script RequireComponent(AudioSource)