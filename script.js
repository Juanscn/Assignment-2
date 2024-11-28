function defaultButtonColours () {
    document.getElementById('buttonIntro').style.backgroundColor = 'black';
    document.getElementById('buttonSingularity').style.backgroundColor = 'black';
    document.getElementById('buttonInflation').style.backgroundColor = 'black';
    document.getElementById('buttonParticles').style.backgroundColor = 'black';
    document.getElementById('buttonAtoms').style.backgroundColor = 'black';
    document.getElementById('buttonStars').style.backgroundColor = 'black';
    document.getElementById('buttonSingularity').style.color = '#b3b2b3';
    document.getElementById('buttonInflation').style.color = '#b3b2b3';
    document.getElementById('buttonParticles').style.color = '#b3b2b3';
    document.getElementById('buttonAtoms').style.color = '#b3b2b3';
    document.getElementById('buttonStars').style.color = '#b3b2b3';
    document.getElementById('buttonIntro').style.color = '#b3b2b3';
}

buttonIntro.addEventListener('click', function(){
    defaultButtonColours();
    document.getElementById('image').src = 'images/earth.png';
    document.getElementById('buttonIntro').style.backgroundColor = '#b3b2b3';
    document.getElementById('buttonIntro').style.color = '#000000';
    document.getElementById('explanation').innerHTML = "The universe has been around for billions of years, starting with the Big Bang. This timeline highlights some of the major events that shaped our cosmos, like the creation of particles and the formation of stars and galaxies. It gives us a sense of how massive and complex the universe really is, and helps us see our place in it."
})

buttonSingularity.addEventListener('click', function(){
    defaultButtonColours();
    document.getElementById('image').src = 'images/singularity.png';
    document.getElementById('buttonSingularity').style.backgroundColor = '#b3b2b3';
    document.getElementById('buttonSingularity').style.color = '#000000';
    document.getElementById('explanation').innerHTML = "Time: 0 seconds.<br>" + 
   "The universe started from a tiny, super-dense point called a singularity. In an instant, space, time, energy, and matter all came into existence. It was so hot that particles couldn’t even form yet—everything was just pure energy."
})

buttonInflation.addEventListener('click', function(){
    defaultButtonColours();
    document.getElementById('image').src = 'images/expansion.png';
    document.getElementById('buttonInflation').style.backgroundColor = '#b3b2b3';
    document.getElementById('buttonInflation').style.color = '#000000';
    document.getElementById('explanation').innerHTML = "Time:<br>" + 
    "0.00000000000000000000000000000001 seconds.<br>" + 
    "The universe began expanding incredibly fast, even faster than the speed of light. As it grew, it started to cool down. Small variations in energy density appeared, which eventually became the starting points for galaxies."
})

buttonParticles.addEventListener('click', function(){
    defaultButtonColours();
    document.getElementById('image').src = 'images/particles.png';
    document.getElementById('buttonParticles').style.backgroundColor = '#b3b2b3';
    document.getElementById('buttonParticles').style.color = '#000000';
    document.getElementById('explanation').innerHTML = "Time: 0.000001 seconds.<br>" +
    "The cooling continues, allowing quarks and gluons to form. These combine into protons and neutrons, creating the first stable building blocks of matter. The universe is a hot, dense plasma of particles."
})

buttonAtoms.addEventListener('click', function(){
    defaultButtonColours();
    document.getElementById('image').src = 'images/atoms.png';
    document.getElementById('buttonAtoms').style.backgroundColor = '#b3b2b3';
    document.getElementById('buttonAtoms').style.color = '#000000';
    document.getElementById('explanation').innerHTML = "Time: 380000 years.<br>" +
    "Electrons combine with protons and neutrons to form neutral hydrogen and helium atoms. This process, called recombination, allows light to travel freely for the first time. This light is still detectable today as the cosmic microwave background radiation."
})

buttonStars.addEventListener('click', function(){
    defaultButtonColours();
    document.getElementById('image').src = 'images/galaxy.png';
    document.getElementById('buttonStars').style.backgroundColor = '#b3b2b3';
    document.getElementById('buttonStars').style.color = '#000000';
    document.getElementById('explanation').innerHTML = "Time: 100 million years.<br>" +
    "Gravity pulled clouds of gas together, sparking the formation of the first stars. These stars grouped into galaxies, clusters, and massive superclusters, shaping the structure of the universe. Over billions of years, elements made in stars became the building blocks for planets and eventually life itself."
})

