import { AboutSections } from "@/components";

export default function About() {
  return (
    <main className="text-white py-5 px-5 md:px-8 lg:px-16 xl:px-24 2xl:px-32 text-justify	">
      <h1 className="text-2xl font-bold text-center">About Us</h1>
      <p className="text-lg">
        Welcome to <span className="text-red-500">G Movies App</span>, the
        ultimate platform for discovering, celebrating, and connecting with the
        world of movies! 🎬✨ Whether you&apos;re a lifelong film fanatic, a curious
        movie explorer, or someone seeking inspiration through the magic of
        cinema, you&apos;ve found the right place.
        <br />
        Our mission is to bridge the gap between movie enthusiasts and the
        endless world of storytelling. We believe every film has a story worth
        telling, and every viewer has a story to share. At [Your Website Name],
        we make it our priority to create a platform where everyone, from casual
        viewers to industry professionals, feels at home.
      </p>

      <AboutSections
        title="Who We Are"
        paragraphs={[
          `At our core, <span class="text-red-500">G Movies App</span> is
        driven by a passion for cinema. We are a group of storytellers, tech
        enthusiasts, and movie buffs united by the shared love of films. Our
        diverse team brings together expertise in technology, content creation,
        and community building to create a space where cinema can truly shine.`,
          `We believe that movies are more than just entertainment—they&apos;re a
        reflection of our lives, emotions, and cultures. That&apos;s why we&apos;ve made
        it our mission to provide a platform that celebrates the art of
        filmmaking while making it accessible to people from all walks of life.
        Our journey started with a dream, and today, we are proud to be a hub
        for movie lovers worldwide.`,
        ]}
      />
      <AboutSections
        title="What We Do"
        paragraphs={[
          `Our platform is designed to deliver a seamless and enriching experience for every visitor. With our <span class="font-semibold">Comprehensive Movie Database</span>, you can explore films from across genres, languages, and decades. Whether you&apos;re searching for an iconic classic or the latest blockbuster, we&apos;ve got you covered with detailed information about cast, crew, plotlines, and more.`,
          `We also go beyond just cataloging movies. Our <span class="font-semibold">In-Depth Reviews and Ratings</span> section ensures you get honest opinions to help you choose the perfect film for your mood. Additionally, our <span class="font-semibold">Watchlists and Recommendations</span> feature lets you curate a personalized collection and discover hidden gems tailored to your preferences.`,
        ]}
      />
      <AboutSections
        title="Our Vision"
        paragraphs={[
          `At <span class="text-red-500">G Movies App</span>, our vision is clear: to celebrate the art of cinema and make it accessible to everyone. We aim to be more than just a website. We want to be a community that brings people together through the power of storytelling.`,
          `Movies have the power to inspire, teach, and connect people across boundaries. Our goal is to create a space where everyone can experience this magic. Whether it&apos;s through discovering a movie that speaks to you or engaging with fellow film enthusiasts, we hope to make <span class="text-red-500">G Movies App</span> your go-to destination for all things cinema.`,
        ]}
      />
      <AboutSections
        title="Our Journey"
        paragraphs={[
          `The story of <span class="text-red-500">G Movies App</span> began in [Year], when a small group of film lovers decided to build something unique—a platform that would combine technology, creativity, and community. What started as a simple database of movies quickly grew into a thriving hub of information, interaction, and inspiration.`,
          `Over the years, we&apos;ve expanded our reach, updated our features, and enhanced the user experience, all while staying true to our original mission. Every milestone, from the launch of our recommendation engine to the introduction of user watchlists, has been driven by our love for movies and our desire to share that passion with the world.`,
        ]}
      />
      <AboutSections
        title="Why Choose Us?"
        paragraphs={[
          `When you visit <span class="text-red-500">G Movies App</span>, you&apos;re not just browsing a website—you&apos;re stepping into a world of possibilities. Our platform is built with the user in mind, offering a <span class="font-semibold">User-Friendly Experience</span> that&apos;s intuitive, fast, and fun. Whether you&apos;re looking up a quick movie fact or diving into a detailed filmography, you&apos;ll find everything at your fingertips.`,
          `We take pride in staying on top of the latest releases, updates, and trends in the movie world. Our team works tirelessly to ensure that every piece of information on the platform is accurate and up-to-date. And because we&apos;re a team of movie lovers ourselves, we understand what it means to deliver a platform that truly resonates with our audience.`,
        ]}
      />
      <AboutSections
        title="Join the Community"
        paragraphs={[
          `There&apos;s something special about sharing your love for movies with others, and at <span class="text-red-500">G Movies App</span>, we make that possible. Engage with a growing community of like-minded enthusiasts who are just as passionate about cinema as you are. Share your thoughts, participate in discussions, and explore new perspectives on your favorite films.`,
          `Whether you&apos;re here to discover your next favorite movie, connect with fellow fans, or simply enjoy the ride, we&apos;re thrilled to have you with us. Let&apos;s make every movie moment unforgettable. 🌟`,
        ]}
      />
    </main>
  );
}
