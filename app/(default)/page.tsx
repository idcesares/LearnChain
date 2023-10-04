export const metadata = {
  title: 'LearnChain',
  description: 'Educação Descentralizada e Colaborativa',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import TallyIframe from '@/components/TallyIframe'

export default function Home() {

  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      {/*<Testimonials />*/}
      <Newsletter />
      <TallyIframe src="https://tally.so/embed/wApBKe?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            var d = document, w = "https://tally.so/widgets/embed.js";
            var v = function() {
              if (typeof Tally !== "undefined") {
                Tally.loadEmbeds();
              } else {
                d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(function(e) {
                  e.src = e.dataset.tallySrc;
                });
              }
            };
            if (typeof Tally !== "undefined") {
              v();
            } else if (d.querySelector('script[src="' + w + '"]') == null) {
              var s = d.createElement("script");
              s.src = w;
              s.onload = v;
              s.onerror = v;
              d.body.appendChild(s);
            }
          `
        }}
      />
    </>
  )
}