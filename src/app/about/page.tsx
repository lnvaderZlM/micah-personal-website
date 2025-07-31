import HeroLayout from '../../components/layouts/HeroLayout';
import ProfileImage from '../../components/ProfileImage';

export default function About() {
	return (
		<HeroLayout align="">
			<ProfileImage
				imgSrc="/about_hero.jpg"
				altText="about me"
			/>
			<p className="italic text-xl pb-6 pt-6">{`I'm just your average glued-to-his-computer web developer that plays video games all day.`}</p>
			<p className="text-lg pb-4">
				{`I'm a web developer with 10 years of experience, primarily working with Drupal.
				For the first five years, I focused exclusively on Drupal, building everything from enterprise-level corporate sites to a mobile gaming guide platform that drew millions of views per day.
				I then spent about three years working with a mix of Drupal and React-based frameworks like Next.js and Remix — building fast, scalable applications also designed for high-traffic environments.
				Most recently, I’ve returned to full-time Drupal development for the past two years.
				I’m currently focused on building performant, maintainable web platforms using Drupal and modern JavaScript tools.`}
			</p>
			<p className="text-lg">
				{`When I’m not coding, there’s a good chance you’ll find me at an arcade, playing rhythm games.
				If it has flashing lights, a complicated control scheme, and music blasting at full volume — I’m in.`}
			</p>
			{/*Still trying to figure out if ‘acting your age’ is a real thing, or just bad advice.
			Until I figure it out, I’ll be here building things, drawing stuff, and getting overly invested in fictional characters.*/}
		</HeroLayout>
	)
}