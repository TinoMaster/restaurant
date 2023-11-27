import { preferMenuData } from "../data/Menu.data";
import { ItemMenu } from "./ItemMenu";
import { LinkButton } from "./LinkButton";
import { BrokeBackground } from "./backgrounds/BrokeBackground";

export const PreferMenu = () => {
  return (
    <section className="py-10 lg:py-28 px-2 z-10 bg-darkMode text-slate-100 relative flex flex-col items-center justify-center">
      <BrokeBackground />
      <h2 className="text-primary/50 text-center w-full">Menu</h2>
      <h3 className="container text-3xl text-primary italic text-center lg:text-4xl pb-10">
        ~~ Il Vostro Preferito ~~
      </h3>
      <article className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-4 px-10 italic">
            {preferMenuData.slice(0, 5).map((item) => (
              <ItemMenu
                key={item.title}
                title={item.title}
                description={item.description}
                price={item.price}
              />
            ))}
          </div>
          <div className="flex flex-col gap-4 px-10 italic">
            {preferMenuData.slice(5, 10).map((item) => (
              <ItemMenu
                key={item.title}
                title={item.title}
                description={item.description}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </article>
      <div className="flex justify-center pt-20">
        <LinkButton href="/menu" title="Vedi Menu" />
      </div>
    </section>
  );
};
