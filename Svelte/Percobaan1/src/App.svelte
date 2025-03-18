<script>
	let name = "Jack"
	let skill = {
		nameSkill: ["Svelte", "ReactJs", "VueJs"],
		ratingSkill:[ 90, 80, 100]
	}
</script>

<main>
	<h2>Hello, {name}</h2>
	<p>Skill: {skill.nameSkill} Rating: {skill.ratingSkill}</p>
	<p>Skill: {skill.nameSkill[2]} Rating: {skill.ratingSkill[2]}</p>
</main>

<style>
	
</style>