import {
  Disclosure,
  DisclosureButton,
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  DisclosurePanel,
} from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Disclosure as="nav" className="bg-gray-800 sticky top-0">
        <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex items-center px-2 lg:px-0">
              <div className="flex-shrink-0">
                <img
                  alt="Your Company"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  className="h-8 w-auto"
                />
              </div>
              <div className="hidden lg:ml-6 lg:block">
                <div className="flex space-x-4">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  <a
                    href="#"
                    className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                  >
                    Dashboard
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Team
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Projects
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Calendar
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
              <div className="w-full max-w-lg lg:max-w-xs">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-400"
                    />
                  </div>
                  <input
                    id="search"
                    name="search"
                    type="search"
                    placeholder="Search"
                    className="block w-full rounded-md border-0 bg-gray-700 py-1.5 pl-10 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="flex lg:hidden">
              {/* Mobile menu button */}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
            <div className="hidden lg:ml-4 lg:block">
              <div className="flex items-center">
                <button
                  type="button"
                  className="relative flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="h-6 w-6" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-4 flex-shrink-0">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="h-8 w-8 rounded-full"
                      />
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                      >
                        Your Profile
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                      >
                        Settings
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                      >
                        Sign out
                      </a>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="lg:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <DisclosureButton
              as="a"
              href="#"
              className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
            >
              Dashboard
            </DisclosureButton>
            <DisclosureButton
              as="a"
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Team
            </DisclosureButton>
            <DisclosureButton
              as="a"
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Projects
            </DisclosureButton>
            <DisclosureButton
              as="a"
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Calendar
            </DisclosureButton>
          </div>
          <div className="border-t border-gray-700 pb-3 pt-4">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="h-10 w-10 rounded-full"
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-white">Tom Cook</div>
                <div className="text-sm font-medium text-gray-400">
                  tom@example.com
                </div>
              </div>
              <button
                type="button"
                className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-3 space-y-1 px-2">
              <DisclosureButton
                as="a"
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                Your Profile
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                Settings
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                Sign out
              </DisclosureButton>
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
      <main>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ratione
        magnam illo officia fugit esse laudantium doloremque natus obcaecati
        tempore incidunt qui debitis ex, nobis aperiam corporis? Non, quibusdam
        adipisci. Illo, animi assumenda quam similique sint obcaecati cumque
        consequatur ipsa eum sed rerum voluptas pariatur fugiat autem quidem
        fugit quae a accusamus deleniti quibusdam, aspernatur saepe doloremque
        reiciendis tempora! Fugiat! Repudiandae excepturi dignissimos, soluta
        debitis explicabo quis ullam quod officia, at eum quibusdam sunt dolores
        incidunt a earum corporis in odit perferendis amet! Consectetur, ex
        autem. Iure velit omnis repellat? Sequi blanditiis veritatis
        exercitationem tempore hic consequuntur, quia ipsam consequatur non
        cumque enim, quo rerum asperiores reprehenderit, sit omnis illum nulla.
        Assumenda sit a magni eum numquam illo cupiditate facilis! Vel,
        nesciunt! Maxime, sit in animi quasi rerum neque alias iusto,
        necessitatibus est odio, voluptatum eius ipsum incidunt labore hic fugit
        reprehenderit accusamus sunt! Facere, officia exercitationem? Illo,
        accusantium id. Enim qui eius voluptatum nisi sed nulla error soluta,
        asperiores debitis eveniet natus numquam animi eum in necessitatibus
        dolorum tempora nesciunt ut? Ratione tenetur perspiciatis cum sed optio
        pariatur nobis. Blanditiis reiciendis eos facere quos libero, laborum
        impedit ex sunt cumque inventore quaerat unde repudiandae sapiente
        praesentium quo officiis tempora dicta voluptatum quas? Doloribus optio
        odio voluptatibus fuga, delectus consequatur. Consequatur veritatis,
        neque sequi facilis doloremque sapiente, maiores aliquid rem alias aut
        nulla unde nobis, placeat adipisci dolores beatae distinctio modi
        molestiae! Iusto placeat soluta natus at aliquam tempore laudantium.
        Placeat sit molestiae excepturi voluptatibus, tempora earum nobis ea ad
        ratione neque, odit architecto recusandae laudantium alias reprehenderit
        corporis aut! Iusto rem rerum inventore at eaque, hic perspiciatis sint
        blanditiis! Id quaerat tempore atque voluptatem cum sit ab repudiandae
        nihil rerum eos expedita, explicabo odio eligendi soluta alias, eveniet
        tempora aut. Suscipit itaque dolorem doloribus ipsam totam ad, nobis
        quia. Magnam adipisci, obcaecati sed consequuntur dignissimos
        consectetur expedita tempore provident ducimus nemo quod maxime
        nesciunt, quasi beatae et illo ullam saepe possimus est culpa
        voluptatibus debitis dolorum deserunt quae. Ut. Velit dolorem hic
        veritatis iure unde minus, ipsam ullam voluptas quidem impedit eligendi
        eos quae! Nulla debitis molestiae, at sapiente inventore libero aliquid
        consectetur soluta dicta, laboriosam architecto? Quisquam, dolore. Neque
        assumenda esse asperiores, molestiae quod illo delectus at officia
        sequi, rem suscipit. Quasi corporis unde voluptate, consequuntur impedit
        provident nulla. Id vel ipsam beatae hic aperiam delectus velit quas?
        Qui tempora quia quo repellat veniam perspiciatis fuga, cum vel eligendi
        rem aut, non, sapiente quaerat ex! Quidem, praesentium quaerat
        perferendis, fugiat sapiente cumque asperiores nisi ducimus ratione,
        aspernatur sit! Cum nihil facilis, provident temporibus veritatis libero
        suscipit minima est? Ullam eum eos ea veritatis inventore minima dolore
        repellat, dolores ipsa in laudantium, earum asperiores id? Blanditiis
        magni similique incidunt! Aliquam fugiat soluta modi ratione? Odit nemo
        amet voluptates dolore porro? Dolorem, et. Beatae magni earum placeat ab
        excepturi, reprehenderit odit provident quod quia, aperiam, harum
        molestiae! Quaerat, at debitis! Nesciunt dolore totam facilis
        praesentium, doloribus inventore velit ipsa odio quas vero, sapiente
        eligendi eos minus quis quae, ipsum a libero impedit architecto
        quibusdam quod hic itaque. Reprehenderit, sunt provident. Dicta
        distinctio porro repellendus voluptate quidem libero, eveniet autem
        laudantium obcaecati blanditiis esse exercitationem dolorum dolore minus
        culpa nostrum incidunt consequuntur delectus nemo necessitatibus?
        Repellendus corporis sed commodi facere pariatur! Rem optio culpa sequi
        exercitationem ut debitis tenetur sapiente cumque cupiditate sint?
        Voluptatem cumque illo, perferendis, in odit sit soluta, adipisci veniam
        neque reiciendis impedit magni autem molestias nesciunt nam? Obcaecati
        ex itaque facere ipsam reprehenderit doloremque at unde nemo ut velit
        tenetur quibusdam, cumque quasi quidem accusamus ab molestiae et vero.
        Adipisci pariatur ratione unde debitis fuga doloremque! Ut. Animi quas,
        expedita molestiae voluptas quo et, ipsa a velit eveniet alias
        voluptatem. Praesentium, eos modi fugit alias placeat ea, sit nihil
        reiciendis deserunt tempora, pariatur ratione explicabo temporibus
        error? Corrupti, sed? Repellendus magnam fugit eius pariatur, hic
        ratione sed mollitia maiores accusantium delectus dolorum deleniti eaque
        ex voluptates officia rem non omnis tenetur repellat cupiditate
        necessitatibus. Libero, dolor quidem. Cupiditate molestias ex modi.
        Error dolores veritatis quos maxime, sunt reiciendis soluta aliquid
        accusantium. Fugit, fuga illum. Quae quisquam quis illum, molestias,
        delectus, temporibus quod repellendus sit vel iste aliquam! Nobis fugiat
        sapiente quae veritatis. Corporis at non, voluptates esse consequuntur
        omnis ipsam quaerat excepturi aut totam nam possimus autem ut ratione ex
        sed itaque! Et quasi voluptatem perspiciatis placeat! Magnam, provident
        corporis laboriosam voluptatibus in ipsam consequuntur sint veniam
        temporibus illum tempora quibusdam minima possimus animi nam odit
        obcaecati culpa beatae nesciunt fugiat quidem. Sunt nesciunt aliquam
        cumque praesentium? Suscipit dolores cupiditate accusantium, repellendus
        sequi officia, porro ipsum tenetur facere nulla rem temporibus molestias
        officiis quis unde. Unde deserunt rem accusantium et ipsum ipsa labore
        earum fugit totam ad! Architecto quis aliquid perspiciatis! Odio itaque
        aut deleniti quidem tenetur ullam vitae, cum sit iure accusantium
        voluptatum dolorum repellendus eaque pariatur rerum. Est, adipisci.
        Magnam, sunt nesciunt. Ea, laborum saepe. Obcaecati modi adipisci enim,
        minima quidem debitis, quis fugit maiores blanditiis officiis nihil in
        pariatur molestias doloribus culpa quae reiciendis perspiciatis.
        Laudantium, magnam amet est sed eveniet ipsa sunt exercitationem. Vero
        molestiae aliquid unde iusto exercitationem eos, optio quod? Architecto,
        doloremque. Tenetur ex pariatur cumque ipsum quos similique quas unde
        magni porro, alias debitis ipsa ad corporis? Nostrum, quod molestias.
        Dolores perferendis numquam, consectetur necessitatibus deserunt ad sed
        voluptas fugit hic quia incidunt saepe explicabo nisi laudantium? Omnis
        dolor voluptates itaque, eligendi quisquam vel officia, sapiente magni
        incidunt fugiat perferendis. Minima, labore assumenda. Eum eius optio
        incidunt dolorem unde laudantium doloremque laboriosam numquam ratione
        at! Voluptate vel impedit ea quae quaerat doloribus, incidunt odit quod,
        non quasi reprehenderit, et neque! Nobis maiores reiciendis dolore neque
        quisquam nihil? Expedita consequuntur qui, facilis, saepe quis odit
        officia laudantium sed ea eius architecto doloremque commodi tempore
        quaerat aspernatur nam cumque porro fuga natus! Doloremque, incidunt!
        Iusto suscipit, amet debitis enim alias vel culpa expedita! Soluta,
        dolores corporis architecto quidem non cumque! Reiciendis ipsum dicta
        iste nihil nisi. Ratione sint animi dolorum sequi natus! Nihil officiis
        optio neque? Accusantium error dolore commodi numquam ea nam animi
        veritatis illum est eveniet provident, quaerat aliquam delectus,
        doloribus unde ut nulla corrupti? Dolor aliquam saepe harum similique!
        Recusandae illum illo repellendus amet delectus ipsum veniam velit,
        doloremque quos optio aperiam corporis eveniet quia ipsa, nam dicta
        fugiat? Qui excepturi unde nemo dignissimos corporis? Ducimus
        perspiciatis magnam veritatis? Quidem in facere eligendi earum. Dolores
        quam consequuntur ipsum quasi. A, libero culpa! Commodi quibusdam
        doloribus incidunt asperiores sint odio perspiciatis, vitae assumenda
        est illo! Dignissimos ab eveniet maxime eaque. Temporibus nostrum sit
        vitae doloribus magni ipsam id omnis cum, perferendis ut deserunt sunt
        minima accusamus doloremque architecto suscipit quisquam eum est minus
        distinctio porro asperiores? Blanditiis officia unde laborum. Aliquam
        culpa ratione corrupti ea aperiam cum totam repudiandae, quia unde
        voluptatibus nobis magni illo labore suscipit? Expedita saepe neque
        soluta ipsam eos. Exercitationem accusamus optio iste, molestias iure
        quia! Blanditiis quas ab ipsum sunt officia! Dolorum id vel, omnis
        soluta quisquam tempora labore harum iusto mollitia non placeat hic
        error, deserunt tempore cupiditate iste eius tenetur perspiciatis
        temporibus. Suscipit! Nam ipsum delectus velit aut quod consequatur
        voluptatibus laborum, reprehenderit minima consectetur voluptas quis
        esse repudiandae vel porro sed! Cum illo commodi aliquam natus in
        deserunt exercitationem consectetur quod est. Consequatur nisi ea
        aspernatur, nobis, delectus est, ab facilis nostrum vero repellat
        molestiae voluptatem laudantium veritatis placeat cupiditate numquam
        minima maiores libero earum sint explicabo. Doloremque inventore iure ad
        temporibus! Ex magnam, sequi adipisci aspernatur omnis quidem voluptates
        doloribus corporis nihil aliquid illum rem temporibus similique totam ab
        quibusdam maxime fugiat? Porro a vero odio necessitatibus, ipsa at
        voluptas natus? Ducimus sed magni vitae autem, sunt minus quis et fugit
        eius doloremque commodi laborum ea ad perspiciatis debitis praesentium
        doloribus quaerat perferendis maiores itaque iure! Commodi quod
        voluptate vitae distinctio. Eveniet, debitis inventore. Perferendis odio
        quia tempora doloremque molestias quibusdam nesciunt vero maiores porro
        illum consequuntur exercitationem debitis iusto accusamus libero esse
        mollitia facere corrupti, itaque fuga quas non! Et. Nesciunt odit
        debitis a itaque, officia illum eius consequatur impedit, enim
        praesentium odio? Sapiente et quidem iusto voluptatem quae explicabo
        cum, distinctio reprehenderit esse iste rerum fugiat neque pariatur at.
        Porro pariatur quod, impedit ut iste nesciunt architecto nemo? Nemo
        repellendus voluptatem rem est aliquam illo quidem excepturi culpa,
        reprehenderit deleniti nam ab minima alias mollitia minus placeat
        dolorem sunt. Perspiciatis dolore unde, quas repellendus fugiat veniam,
        minima blanditiis dolorum quaerat obcaecati dicta praesentium. Et nihil
        fuga accusantium dolorem dolor rem facilis officia cumque, tempora,
        corrupti dolores a natus ex? Voluptas ipsa incidunt quasi, quod eligendi
        consectetur. Ut quis illum, deserunt, esse aperiam asperiores amet ullam
        dicta odit nisi architecto voluptatem laboriosam dolorum rem repudiandae
        earum quia possimus doloremque vitae? Odit maxime libero repudiandae
        rerum, nostrum debitis similique iusto error quibusdam, nam quasi minima
        labore delectus animi. Reprehenderit cumque cum dicta ea iure ut,
        voluptatem commodi eum quibusdam harum corporis? Molestias veritatis
        nostrum dolorem laudantium, iure alias magni, atque accusamus corrupti
        temporibus est non odio iusto omnis nihil officia sint saepe soluta hic
        commodi natus magnam. Officia eligendi fugit velit. Laudantium nemo
        ratione laboriosam! Dignissimos laboriosam labore illum et alias quo
        numquam, aut eveniet maxime libero? Omnis quas quasi dolorem vitae totam
        at soluta temporibus, itaque quod nostrum harum corrupti. Illum, ea?
        Iure suscipit iste ipsum vero quidem officiis enim in. Id dolore sequi
        quis et autem aliquam, officiis nam eum, placeat ab cumque aut ullam!
        Vitae consectetur eligendi optio! Vero pariatur voluptatum, commodi
        laudantium, ipsum inventore veniam error repudiandae cupiditate, ad
        aspernatur. Libero mollitia necessitatibus, recusandae est totam
        consectetur culpa quia ipsa labore ratione ut quasi placeat aperiam
        illo. Necessitatibus reprehenderit explicabo obcaecati. Quasi id,
        deleniti quaerat harum natus sapiente molestias blanditiis magni fuga
        ipsa ipsam impedit ad praesentium explicabo distinctio saepe enim odit
        eos? Dignissimos magnam similique minima. Ab, quae eos. Veritatis
        voluptate enim nulla soluta ullam omnis provident voluptatem laboriosam,
        animi assumenda, temporibus autem inventore sit veniam laudantium
        dignissimos adipisci nemo est? Voluptatibus quaerat doloribus similique
        eveniet. Ipsam vitae amet debitis perferendis expedita consequatur
        laboriosam exercitationem, velit esse voluptatem? A nulla at, aut ipsa
        quos inventore, alias iste quidem praesentium quo distinctio fuga
        doloribus esse dolore dolorum. Voluptatibus similique ut ad dicta
        dolores molestiae itaque magnam debitis deleniti, placeat quod esse
        quia, voluptas maxime adipisci blanditiis voluptates nisi non deserunt?
        Numquam eligendi fuga, sed obcaecati totam quis? Ipsum, in laudantium
        quo reiciendis optio deleniti ullam harum, vitae minima aperiam odit
        placeat ad nisi totam quibusdam ex suscipit id officiis! Dolores ipsam
        cupiditate alias dolore asperiores ex accusantium! Voluptates iste,
        numquam nihil voluptas earum amet necessitatibus suscipit. Aperiam natus
        voluptas aliquid ex alias, quae harum esse rerum, iusto magnam magni
        molestias at dolorum ratione recusandae eum unde aspernatur? Porro
        nesciunt modi pariatur repellat cupiditate, ipsum, eos dolores incidunt
        libero assumenda, quasi quaerat voluptates aspernatur? Beatae labore
        reiciendis architecto, pariatur, aliquid blanditiis unde repellat ullam,
        assumenda odit nobis magni? Adipisci, odio? Dignissimos ab fuga,
        distinctio laboriosam quam repellendus quaerat debitis cupiditate,
        dolores mollitia adipisci ut libero animi omnis voluptates iste ipsam
        eveniet exercitationem tempore, sapiente illo. Architecto, excepturi
        maxime. Rerum pariatur excepturi labore hic, temporibus voluptates modi
        expedita libero officiis, laboriosam explicabo culpa sit illo vero esse!
        Quo alias nihil ducimus ipsum quidem delectus, sapiente pariatur
        perspiciatis itaque minus. Modi illo ad odio, aliquid aspernatur laborum
        cumque dolorem tempore vel facere id molestiae fuga alias praesentium
        voluptatem sint eaque reiciendis debitis ducimus commodi sed eos
        adipisci inventore! Illo, sequi? Ab veritatis quos perferendis. Eius id
        delectus repudiandae recusandae esse similique iure ex molestias
        suscipit a animi doloremque dolorem nam sunt eaque impedit facere
        repellat officia, voluptate magni aut magnam! Voluptate tempore ipsam
        beatae, a accusamus enim repudiandae deserunt atque quidem incidunt quod
        distinctio earum tenetur, quam error consequatur soluta nihil ipsum,
        labore ducimus modi! Nesciunt quo fugiat obcaecati perferendis? Ipsa
        eius necessitatibus vitae eaque deserunt. Atque quia harum, maxime
        consequuntur quasi dolore, fugit fuga laboriosam ad facilis ipsa earum.
        Dolorem praesentium voluptatibus, blanditiis quo ipsam recusandae
        ducimus quod dolor! Qui, cupiditate rem, necessitatibus rerum nulla
        magnam asperiores eveniet facilis optio modi labore maxime totam
        similique explicabo omnis quidem ab obcaecati odio, deleniti officiis
        dignissimos. Laborum distinctio ex esse explicabo? Blanditiis, eaque eum
        asperiores quam animi quas officia fuga consequuntur nisi? Blanditiis,
        similique! Est dicta unde obcaecati quae odio, eius exercitationem
        labore sed incidunt magni harum. Delectus minus consectetur cupiditate?
        Magni iure fugiat vero velit maxime beatae unde alias! Asperiores qui
        inventore ut laboriosam atque iure, accusamus repellat nostrum
        consectetur, harum quidem earum in provident! Consectetur numquam
        incidunt facilis quidem? Voluptates ad deserunt ipsam veritatis
        molestiae. Autem nesciunt dolorum totam ipsa, neque illum, non, sint
        deserunt eaque eos quasi explicabo. Alias dolorum harum reprehenderit
        fuga aliquid quisquam quos dicta accusamus! Omnis, architecto neque!
        Magnam distinctio modi quibusdam sapiente earum amet ea, facere sint
        nesciunt itaque commodi, vitae perferendis? Consequatur sunt error ad
        quidem accusamus atque sed obcaecati dignissimos voluptatem pariatur!
        Fugiat corporis a ducimus aspernatur molestiae laborum error fugit.
        Praesentium quasi reprehenderit, facilis fugit culpa optio omnis veniam,
        eius labore corrupti doloremque earum, odio ducimus distinctio mollitia
        facere saepe enim? Ducimus, ipsam. Sit architecto quis, animi
        dignissimos aliquam culpa. Debitis at ipsa quae esse nemo! Veniam
        voluptatibus maiores soluta voluptatem, hic expedita perspiciatis.
        Incidunt commodi provident qui nesciunt aliquid obcaecati. Pariatur
        cupiditate repellat animi vero unde quis corporis inventore doloremque
        officia dicta, blanditiis nobis odio enim omnis voluptatum, dignissimos
        hic provident dolorem quae tempora in ut dolore consectetur veritatis?
        Alias? Aut, accusamus! Dignissimos repellendus sunt nihil dolorum
        officiis fugit, ex perferendis ab voluptatem, deleniti recusandae
        commodi placeat quaerat rerum sapiente sequi dolor excepturi hic. Sunt
        sapiente itaque id nihil similique. Tempora esse atque illo voluptatum
        tempore quo accusantium maxime hic similique reiciendis dolore expedita
        vero quas totam ipsam nulla placeat quibusdam, sequi est? A eius vero,
        cum dolorem soluta earum! Perspiciatis autem adipisci ratione illum
        quibusdam sapiente. Quaerat vel, eveniet accusamus consequuntur rerum in
        harum, voluptatem totam aliquam commodi quas ab. Quo corporis nesciunt
        cupiditate consequuntur velit possimus soluta voluptate! Pariatur,
        possimus fugit. Modi tempore perspiciatis dolore, illo dolores maxime
        architecto autem et quas, dolorum ducimus, sit tempora veritatis id a
        laboriosam atque nostrum eos dignissimos dolorem sapiente quam
        molestiae. Consequatur tenetur mollitia ullam numquam illo dolores sed
        nobis. Aperiam, qui veritatis! Nulla quibusdam voluptates modi aliquam
        quas? Magnam dolores eveniet accusantium vero ipsum reprehenderit unde
        eum adipisci asperiores facere? Labore, ad? Velit modi debitis enim at
        possimus porro laudantium laboriosam perspiciatis amet similique veniam
        dolore accusamus qui, animi sequi neque, commodi asperiores nesciunt
        obcaecati impedit eius. Excepturi, praesentium minus? Iure veritatis
        reprehenderit et consectetur eaque deserunt ex cupiditate! Nam,
        voluptatibus minima quaerat adipisci dolor provident soluta vel quidem
        porro. Molestiae illo esse eos facilis illum neque consectetur eaque
        fugit. Dolorum rem aut autem cumque quibusdam cupiditate perspiciatis
        deleniti possimus nihil atque? Neque, perspiciatis! Unde est, aliquam
        itaque praesentium suscipit, rem, incidunt numquam tempora eius quis
        explicabo beatae minima delectus. Officiis esse molestias dolorum aut
        quae tempora nesciunt consequatur. Voluptatum molestiae optio animi
        magnam quo laboriosam! Impedit nesciunt doloremque iusto, maiores, eum
        ad, tempora quas esse temporibus dolor nemo consequuntur? Fuga neque
        aperiam laudantium earum odio nesciunt obcaecati ratione quisquam et
        dolorem aliquam aut doloribus, id, qui eius. Iure quas iusto perferendis
        vitae quasi id beatae quis atque nostrum molestias! Nisi rerum modi
        perspiciatis, amet quibusdam at numquam quasi, assumenda blanditiis
        aliquid id! Ut vero atque accusantium dolorem at error doloremque
        architecto qui quibusdam possimus? Quae temporibus obcaecati repellat
        deserunt! Iure a eligendi harum itaque nesciunt deserunt tempora sint
        optio atque error hic sequi ex, minima culpa corrupti neque iste illo
        laborum! Deleniti delectus reprehenderit soluta alias eius eveniet
        temporibus? Reiciendis tempora, amet cupiditate maxime atque doloremque
        assumenda recusandae non tenetur quis. Quasi ab hic accusantium
        voluptate debitis. Consequuntur molestias eligendi, accusamus ad error
        dolor assumenda. Officia voluptas aut reiciendis! Harum quos, quas ipsam
        laboriosam animi nobis sit omnis a, eligendi facilis esse. Ad saepe
        magni voluptatibus, accusamus fugit laudantium fuga sunt nemo laboriosam
        maiores dolorum perspiciatis! Cum, ratione. Minima! Sed, aliquam. Animi
        aperiam, repellat architecto, laboriosam rerum sapiente numquam
        voluptates natus fugiat ad unde sequi accusantium, temporibus qui rem
        est placeat? Iste omnis esse impedit sint est perspiciatis minima.
        Nihil, quos? Ducimus cum iste at, quasi ea dicta, id culpa repellat,
        iusto doloremque quis itaque optio dolor quod placeat quidem harum
        dolores provident non rerum! Repellendus expedita doloribus
        necessitatibus? Repellat non recusandae rerum inventore cupiditate ab
        earum commodi reiciendis omnis officiis, velit sed deleniti nihil fuga
        illum corporis ratione corrupti voluptate necessitatibus dignissimos
        quasi neque vitae. Fuga, blanditiis voluptatibus? Aliquam in adipisci
        doloribus eligendi maiores impedit incidunt. Maxime tempore commodi
        alias error, expedita tempora non libero illo odio ut rem maiores ab
        quae debitis optio? Eaque officia debitis deserunt. Dolorem nesciunt,
        incidunt tenetur, ea ut voluptatibus impedit magni itaque quod
        voluptatum doloribus necessitatibus excepturi ratione eum eos ullam
        reiciendis, accusantium laboriosam veniam perferendis harum. Fuga
        voluptate architecto excepturi minima. Cum nobis unde, suscipit sequi
        temporibus, sint doloribus adipisci atque distinctio provident pariatur
        libero rerum nam eaque! Vitae odio nemo atque, eius vero ex libero
        deserunt necessitatibus ratione, voluptatem hic! Temporibus cupiditate
        alias tenetur, sint corporis, facere nesciunt vero perspiciatis nam,
        nihil saepe consectetur illum. Architecto quibusdam ex vel laudantium
        maxime. Veniam ut esse harum reprehenderit sapiente animi officiis
        fugiat. Quibusdam esse neque modi ea iusto praesentium voluptatum
        accusantium odio temporibus tempore debitis illum fugiat laboriosam,
        tempora, molestiae repellendus nemo qui ipsa? Iure amet cupiditate
        blanditiis ipsam ea eveniet facere. Consequatur accusantium numquam
        voluptatem voluptatibus culpa aliquid rerum maiores facere maxime
        repudiandae repellendus, placeat assumenda a quaerat itaque, molestiae
        dolor! Delectus officiis exercitationem omnis nostrum ratione
        perspiciatis ullam excepturi beatae. Veniam dolore magnam, sunt
        aspernatur sapiente excepturi fuga ipsa eos facilis laboriosam officia
        adipisci, fugiat quasi consequuntur delectus numquam cupiditate iusto
        quam eius ratione, expedita sed eaque? Atque, blanditiis voluptatem!
        Atque blanditiis quaerat dolorum modi dolorem natus tempore quos
        provident facilis ut impedit quae sapiente voluptas sed molestias, amet
        facere enim asperiores. Rerum necessitatibus tempore suscipit itaque vel
        officiis delectus. Eveniet illo, dolor officiis delectus tenetur placeat
        nemo, iusto nostrum nam at vero voluptas sint nisi ipsam quis minima
        possimus sit? Quis suscipit aliquid amet accusamus fugit quisquam
        cupiditate maiores.
      </main>
    </div>
  );
}
