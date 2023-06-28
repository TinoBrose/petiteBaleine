import ImageCard from "../components/ImageCard";
import LinkCard from "../components/LinkCard";

export default function Bretagne() {
  return (
    <main className="container mx-auto">
      <div className="flex flex-col gap-2 items-center justify-between mt-10 px-8 md:px-24 mx-5 gap-[48px]">
        {/* <h1 className="text-2xl font-bold">Rue de Brenilour</h1>
        <div className="text-center">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </div>
        <div className="flex flex-col md:flex-row gap-[24px]">
          <LinkCard
            title="La petite baleine"
            href="https://images.unsplash.com/photo-1590004953392-5aba2e72269a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80"
          />
          <LinkCard
            title="La grande baleine"
            href="https://images.unsplash.com/photo-1590004845575-cc18b13d1d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80"
          />
        </div>
        <div className="border-t-2 border-gray-300 w-full"></div> */}
        <h1 id="bretagne" className="text-2xl font-bold">
          Urlaub in der Bretagne
        </h1>

        <div className="flex flex-col lg:flex-row gap-[24px] align-center justify-center items-center">
          <div className="flex-1 h-[400] ">
            <img
              src="https://images.unsplash.com/photo-1621152700063-cccfcbae6b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              className="object-contain"
            />
            {/* <ImageCard href="https://images.unsplash.com/photo-1590004845575-cc18b13d1d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80" /> */}
          </div>
          <div className="flex-1 align-center justify-center h-[100] ">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-[24px] align-center justify-center items-center">
          <div className="flex-1 align-center justify-center h-[100] ">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.
          </div>
          <div className="flex-1">
            <ImageCard href="https://images.unsplash.com/photo-1603436410284-8c8ad3453651?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" />
          </div>
        </div>
      </div>
    </main>
  );
}
