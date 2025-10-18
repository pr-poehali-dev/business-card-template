import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
          <div className="inline-block mb-6">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-5xl font-bold text-white shadow-lg">
              АС
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Анна Смирнова
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light">
            Веб-дизайнер и digital-художник
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <Button size="lg" className="gap-2 shadow-lg">
              <Icon name="Mail" size={20} />
              Написать мне
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Icon name="Download" size={20} />
              Скачать резюме
            </Button>
          </div>

          <div className="h-px w-24 bg-border mx-auto" />
        </div>
      </section>

      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-4xl font-bold mb-8 text-center">О себе</h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Создаю минималистичные и функциональные дизайны для веб-проектов. 
              Работаю с брендами, стартапами и частными клиентами по всему миру.
            </p>
            
            <p>
              Моя философия — простота и элегантность. Каждый проект — это баланс 
              между эстетикой и удобством использования.
            </p>

            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="text-center group hover:scale-105 transition-transform">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon name="Palette" size={28} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Дизайн</h3>
                <p className="text-sm">UI/UX, брендинг, иллюстрации</p>
              </div>

              <div className="text-center group hover:scale-105 transition-transform">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon name="Code" size={28} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Разработка</h3>
                <p className="text-sm">HTML, CSS, React</p>
              </div>

              <div className="text-center group hover:scale-105 transition-transform">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon name="Sparkles" size={28} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Креатив</h3>
                <p className="text-sm">Анимация, концепты</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-12">Контакты</h2>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button variant="outline" size="lg" className="gap-3" asChild>
              <a href="mailto:anna@example.com">
                <Icon name="Mail" size={20} />
                anna@example.com
              </a>
            </Button>
            
            <Button variant="outline" size="lg" className="gap-3" asChild>
              <a href="tel:+79001234567">
                <Icon name="Phone" size={20} />
                +7 (900) 123-45-67
              </a>
            </Button>
          </div>

          <div className="flex gap-4 justify-center">
            <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all" asChild>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                <Icon name="Send" size={24} />
              </a>
            </Button>
            
            <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Icon name="Github" size={24} />
              </a>
            </Button>
            
            <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Icon name="Linkedin" size={24} />
              </a>
            </Button>
            
            <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all" asChild>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Icon name="Instagram" size={24} />
              </a>
            </Button>
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © 2025 Анна Смирнова. Все права защищены.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
