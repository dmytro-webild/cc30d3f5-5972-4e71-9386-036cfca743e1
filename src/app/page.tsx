"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import TeamCardEleven from '@/components/sections/team/TeamCardEleven';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Activity, Award, Clock, Users, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="small"
        sizing="mediumLargeSizeLargeTitles"
        background="fluid"
        cardStyle="gradient-radial"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "About",
          id: "about",
        },
        {
          name: "Training",
          id: "features",
        },
        {
          name: "Coaches",
          id: "team",
        },
        {
          name: "Membership",
          id: "pricing",
        },
        {
          name: "FAQ",
          id: "faq",
        },
      ]}
      brandName="IRON CROSSFIT"
      button={{
        text: "Join Now",
        href: "contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{
        variant: "gradient-bars",
      }}
      title="Build Your Strength. Define Your Limits."
      description="Elite coaching, community-driven workouts, and the most modern equipment. Join the premier CrossFit facility in the city."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/close-up-portrait-young-muscular-sportsman_171337-9450.jpg",
          alt: "athlete portrait",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-athlete-competing-olympic-games-tournament_23-2151470969.jpg",
          alt: "athlete portrait",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-young-handsome-sportsman-holds-hand-chin-dark-background_613910-19200.jpg",
          alt: "athlete portrait",
        },
        {
          asset://avatar-4: "http://img.b2bpic.net/free-photo/black-white-portrait-athlete-participating-olympic-championship-sports_23-2151500654.jpg",
          src: "http://img.b2bpic.net/free-photo/black-white-portrait-athlete-participating-olympic-championship-sports_23-2151500654.jpg",
          alt: "athlete portrait",
        },
        {
          src: "http://img.b2bpic.net/free-photo/two-boxer-practicing-boxing-fitness-studio_107420-65155.jpg",
          alt: "athlete portrait",
        },
      ]}
      avatarText="Join 500+ athletes today"
      buttons={[
        {
          text: "Start Free Trial",
          href: "contact",
        },
        {
          text: "Explore Classes",
          href: "features",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "HIIT",
        },
        {
          type: "text",
          text: "Powerlifting",
        },
        {
          type: "text",
          text: "Mobility",
        },
        {
          type: "text",
          text: "Endurance",
        },
        {
          type: "text",
          text: "Community",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={true}
      title="Where Grit Meets Innovation"
      description="Our gym is designed for high-performance training. With 10,000 sq. ft. of space and state-of-the-art rigging, we offer the optimal environment for every athlete, regardless of skill level."
      imageSrc="http://img.b2bpic.net/free-photo/business-colleagues-banner-concept-with-copy-space_23-2149601492.jpg?_wi=1"
      imageAlt="crossfit gym interior"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFive
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "HIIT Programs",
          description: "High Intensity Interval Training to boost your metabolic rate.",
          icon: Zap,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/gym-barbell-concept_23-2147671914.jpg",
              imageAlt: "hiit workout",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/physical-activity-stats-around-person_23-2150163419.jpg",
              imageAlt: "gym equipment",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-muscular-sportsman_171337-9450.jpg?_wi=1",
          imageAlt: "hiit workout",
        },
        {
          title: "Powerlifting",
          description: "Master Olympic lifting with expert guidance.",
          icon: Activity,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/muscular-build-man-making-effort-while-weightlifting-cross-training-gym_637285-2488.jpg",
              imageAlt: "powerlifting",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/muscular-build-man-exercising-with-barbell-cross-training-gym_637285-2477.jpg",
              imageAlt: "barbell lifting",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-athlete-competing-olympic-games-tournament_23-2151470969.jpg?_wi=1",
          imageAlt: "hiit workout",
        },
        {
          title: "Mobility",
          description: "Restore range of motion and prevent injuries.",
          icon: Activity,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/full-shot-woman-stretching-leg-gym_23-2149049783.jpg",
              imageAlt: "gym mobility",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/doctor-patient-training-leg-mat-mobility-control_169016-71172.jpg",
              imageAlt: "mobility training",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-handsome-sportsman-holds-hand-chin-dark-background_613910-19200.jpg?_wi=1",
          imageAlt: "hiit workout",
        },
      ]}
      title="Train Like A Pro"
      description="Our programs are designed for long-term health and peak athletic performance."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "500+",
          title: "Active Members",
          description: "Joining the elite every day",
          icon: Users,
        },
        {
          id: "m2",
          value: "20+",
          title: "Certified Coaches",
          description: "Years of combined experience",
          icon: Award,
        },
        {
          id: "m3",
          value: "15+",
          title: "Daily Classes",
          description: "Flexible scheduling for you",
          icon: Clock,
        },
      ]}
      title="Proven Results"
      description="Our community is growing stronger every day."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardEleven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      groups={[
        {
          id: "head",
          groupTitle: "Leadership Team",
          members: [
            {
              id: "c1",
              title: "Sarah Miller",
              subtitle: "Head Coach",
              detail: "10 years in CrossFit",
              imageSrc: "http://img.b2bpic.net/free-photo/young-adult-doing-indoor-sport-gym_23-2149205542.jpg",
              imageAlt: "fitness coach",
            },
            {
              id: "c2",
              title: "James Chen",
              subtitle: "Nutritionist",
              detail: "Helping reach your goals",
              imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-man-sportswear-gym_1303-20729.jpg",
              imageAlt: "nutritionist",
            },
            {
              id: "c3",
              title: "Marcus V.",
              subtitle: "Performance Coach",
              detail: "Specialist in Olympic Lifts",
              imageSrc: "http://img.b2bpic.net/free-photo/single-handsome-muscular-black-man-with-shaved-head-folded-arms-cheerful-expression_343059-380.jpg",
              imageAlt: "performance coach",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-muscular-sportsman_171337-9450.jpg?_wi=2",
          imageAlt: "fitness coach",
        },
      ]}
      title="Meet Your Coaches"
      description="Experts who guide your transformation."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardNine
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      plans={[
        {
          id: "basic",
          title: "Foundational",
          price: "$120",
          period: "monthly",
          features: [
            "3 classes/week",
            "Open Gym access",
            "Basic nutrition plan",
          ],
          button: {
            text: "Join Now",
            href: "contact",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-muscular-handsome-man-wetsuit-with-cloud-talc-around-dark-background_613910-3457.jpg",
          imageAlt: "Portrait of muscular handsome man in wetsuit and with cloud of talc around over dark background.",
        },
        {
          id: "pro",
          title: "Elite Athlete",
          price: "$199",
          period: "monthly",
          features: [
            "Unlimited classes",
            "Personal programming",
            "Quarterly check-ins",
            "Open Gym access",
          ],
          button: {
            text: "Go Pro",
            href: "contact",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-muscular-sportsman_171337-9450.jpg?_wi=3",
          imageAlt: "Portrait of muscular handsome man in wetsuit and with cloud of talc around over dark background.",
        },
      ]}
      title="Membership Plans"
      description="Find the plan that matches your training frequency."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Alex R.",
          date: "Jan 2024",
          title: "Athlete",
          quote: "Life-changing experience.",
          tag: "Transformation",
          avatarSrc: "http://img.b2bpic.net/free-photo/young-adult-doing-indoor-sport-gym_23-2149205541.jpg",
          avatarAlt: "athlete portrait",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-muscular-sportsman_171337-9450.jpg?_wi=4",
          imageAlt: "athlete portrait",
        },
        {
          id: "t2",
          name: "Maria K.",
          date: "Feb 2024",
          title: "Member",
          quote: "Best coaching I've ever had.",
          tag: "Elite",
          avatarSrc: "http://img.b2bpic.net/free-photo/smiling-afro-american-sports-man-with-arms-folded-looking-camera_171337-8257.jpg",
          avatarAlt: "athlete portrait",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-athlete-competing-olympic-games-tournament_23-2151470969.jpg?_wi=2",
          imageAlt: "athlete portrait",
        },
        {
          id: "t3",
          name: "John S.",
          date: "Mar 2024",
          title: "Member",
          quote: "The community keeps me coming back.",
          tag: "Community",
          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-female-athlete-competing-olympic-games_23-2151450284.jpg",
          avatarAlt: "athlete portrait",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-handsome-sportsman-holds-hand-chin-dark-background_613910-19200.jpg?_wi=2",
          imageAlt: "athlete portrait",
        },
        {
          id: "t4",
          name: "Lisa B.",
          date: "Apr 2024",
          title: "Member",
          quote: "I've never felt stronger.",
          tag: "Strength",
          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-confident-thai-boxers_107420-64995.jpg",
          avatarAlt: "athlete portrait",
          imageSrc: "http://img.b2bpic.net/free-photo/black-white-portrait-athlete-participating-olympic-championship-sports_23-2151500654.jpg",
          imageAlt: "athlete portrait",
        },
        {
          id: "t5",
          name: "David W.",
          date: "May 2024",
          title: "Member",
          quote: "Highly recommended gym.",
          tag: "Support",
          avatarSrc: "http://img.b2bpic.net/free-photo/two-boxer-practicing-boxing-fitness-studio_107420-65155.jpg",
          avatarAlt: "athlete portrait",
          imageSrc: "http://img.b2bpic.net/free-photo/business-colleagues-banner-concept-with-copy-space_23-2149601492.jpg?_wi=2",
          imageAlt: "athlete portrait",
        },
      ]}
      title="Athlete Stories"
      description="What our community has to say about their transformation."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",
          title: "Are beginners welcome?",
          content: "Absolutely. We offer an On-Ramp program for all new members.",
        },
        {
          id: "f2",
          title: "What equipment do you have?",
          content: "Full Olympic setup, rowing machines, and assault bikes.",
        },
        {
          id: "f3",
          title: "Is there a free trial?",
          content: "Yes, come in for your first class free of charge.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/abstract-blur-gym-fitness-room_74190-4501.jpg"
      mediaAnimation="slide-up"
      title="Common Questions"
      description="Everything you need to know about our gym."
      faqsAnimation="slide-up"
      imageAlt="gym equipment"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      text="Ready to redefine your limits? Join our CrossFit family today."
      buttons={[
        {
          text: "Contact Us Now",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Training",
              href: "#features",
            },
            {
              label: "Coaches",
              href: "#team",
            },
          ],
        },
        {
          items: [
            {
              label: "Pricing",
              href: "#pricing",
            },
            {
              label: "FAQs",
              href: "#faq",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      logoText="IRON CROSSFIT"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
