const text = `Since I was a little girl, shopping wasn’t just a weekend plan, it was my playground.
While others played with toys, I was already drawn to the world of fabrics, fits, and everything fashion.
The mall felt like a runway, and every outfit was a chance to shine, even if it was just for a regular day out.
I wasn’t just picking clothes, I was discovering confidence, creativity, and a sense of self through style.
As I grew older, that love for fashion only evolved.
I started seeing outfits not just as pieces of clothing, but as a way to speak without saying a word.
I don’t just shop, I slay every aisle. I don’t just dress, I express.
For me, fashion is the beauty of life captured in fabric, mood, and detail.

And shopping?

That’s where the magic begins, where imagination meets identity,
and where every look tells a story…`;

const textElement = document.getElementById("typewriter-text");
let index = 0;

function typeChar() {
  if (index < text.length) {
    textElement.textContent += text.charAt(index);
    
    // Add glow briefly
    textElement.parentElement.classList.add("glow");
    setTimeout(() => {
      textElement.parentElement.classList.remove("glow");
    }, 200);

    index++;
    setTimeout(typeChar, 45); // Slower typing speed for readability
  }
}

document.addEventListener("DOMContentLoaded", typeChar);
