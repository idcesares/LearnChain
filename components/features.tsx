import { CurrencyDollarIcon, ShareIcon, LockClosedIcon, ChatBubbleLeftRightIcon, AdjustmentsVerticalIcon, GlobeAmericasIcon } from '@heroicons/react/24/solid'

export default function Features() {
  return (
    <section id="features">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Transformando a Economia do Conhecimento</h2>
            <p className="text-xl text-gray-400">A LearnChain introduz um novo paradigma para a criação e o compartilhamento de conhecimento online, possibilitado pela tecnologia blockchain. Descubra as principais funcionalidades que tornam isso uma realidade.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <ShareIcon className="h-16 w-16 mb-4 text-indigo-500" />
              <h4 className="h4 mb-2">Compartilhe Sem Limites</h4>
              <p className="text-lg text-gray-400 text-center">Publique cursos, vídeos, e-books e muito mais, sem restrições de formato ou barreiras de distribuição.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <AdjustmentsVerticalIcon className='h-16 w-16 mb-4 text-indigo-500' />
              <h4 className="h4 mb-2">Controle Total</h4>
              <p className="text-lg text-gray-400 text-center">Mantenha os direitos sobre seu conteúdo. Defina suas próprias condições de uso com smart contracts.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <CurrencyDollarIcon className="h-16 w-16 mb-4 text-indigo-500" />
              <h4 className="h4 mb-2">Seja Recompensado</h4>
              <p className="text-lg text-gray-400 text-center">Receba sua fatia justa e instantânea sempre que seu conteúdo é consumido, via blockchain.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <ChatBubbleLeftRightIcon className="h-16 w-16 mb-4 text-indigo-500" />
              <h4 className="h4 mb-2">Construa sua Reputação</h4>
              <p className="text-lg text-gray-400 text-center">Tenha suas contribuições registradas de forma transparente e imutável na blockchain.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <LockClosedIcon className="h-16 w-16 mb-4 text-indigo-500" />
              <h4 className="h4 mb-2">Privacidade personalizável</h4>
              <p className="text-lg text-gray-400 text-center">Você tem controle total sobre sua privacidade. Personalize as configurações para determinar exatamente o que compartilhar e com quem.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              <GlobeAmericasIcon className="h-16 w-16 mb-4 text-indigo-500" />
              <h4 className="h4 mb-2">Comunidade Global</h4>
              <p className="text-lg text-gray-400 text-center">Alcance e colabore com aprendizes e criadores do mundo todo.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
