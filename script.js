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
    document.getElementById('explanation').innerHTML = "The universe has a history that stretches back billions of years, beginning from the moment of the Big Bang. This timeline offers a glimpse into the key events that have shaped our cosmos, from the formation of fundamental particles to the birth of galaxies and stars. It helps us understand the immense scale and complexity of the universe's evolution, as well as our place within it."
})

buttonSingularity.addEventListener('click', function(){
    defaultButtonColours();
    document.getElementById('image').src = 'images/singularity.png';
    document.getElementById('buttonSingularity').style.backgroundColor = '#b3b2b3';
    document.getElementById('buttonSingularity').style.color = '#000000';
    document.getElementById('explanation').innerHTML = "Time: 0 seconds.<br>" + 
    "The universe begins from a singularity, an infinitely small and dense point. In an instant, space, time, energy, and matter burst into existence. The temperature is so high that no particles can form yet—everything exists as pure energy."
})

buttonInflation.addEventListener('click', function(){
    defaultButtonColours();
    document.getElementById('image').src = 'images/expansion.png';
    document.getElementById('buttonInflation').style.backgroundColor = '#b3b2b3';
    document.getElementById('buttonInflation').style.color = '#000000';
    document.getElementById('explanation').innerHTML = "Time: 0.00000000000000000000000000000001 seconds.<br>" + 
    "The universe expands at an extraordinary rate, faster than the speed of light. As it stretches out, it begins to cool. Tiny fluctuations in energy density appear, which will later form the seeds of galaxies."
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
    "Gravity begins pulling clouds of gas together, igniting the first stars. These stars form galaxies, clusters, and superclusters, creating the cosmic web that structures the universe. Over billions of years, elements forged in stars create the building blocks for planets and life."
})