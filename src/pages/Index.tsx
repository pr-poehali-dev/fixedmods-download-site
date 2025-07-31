import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/10">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/img/d1d9b660-d385-4958-82ac-f3b49a5e8060.jpg" alt="FixedMods" className="w-10 h-10 rounded-lg" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              FixedMods
            </h1>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Возможности</a>
            <a href="#guide" className="text-muted-foreground hover:text-foreground transition-colors">Руководство</a>
            <a href="#support" className="text-muted-foreground hover:text-foreground transition-colors">Поддержка</a>
            <Button>Скачать</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-gradient-to-r from-primary to-secondary text-white">
              Бесплатно навсегда
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              FixedMods
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Мощная бесплатная программа для модификации игр. 
              Простая установка, безопасное использование, неограниченные возможности.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                <Icon name="Download" className="mr-2" />
                Скачать FixedMods
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                <Icon name="Play" className="mr-2" />
                Посмотреть демо
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Возможности</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Всё необходимое для модификации игр в одной программе
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="animate-scale-in hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Settings" className="text-white" />
                </div>
                <CardTitle>Простая настройка</CardTitle>
                <CardDescription>
                  Интуитивный интерфейс позволяет настроить любые моды за несколько кликов
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="animate-scale-in hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" className="text-white" />
                </div>
                <CardTitle>Безопасность</CardTitle>
                <CardDescription>
                  Автоматическое резервное копирование и проверка файлов на вирусы
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="animate-scale-in hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Gamepad2" className="text-white" />
                </div>
                <CardTitle>Поддержка игр</CardTitle>
                <CardDescription>
                  Совместимость с 1000+ популярных игр и автоматическое обнаружение
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="animate-scale-in hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" className="text-white" />
                </div>
                <CardTitle>Быстрая установка</CardTitle>
                <CardDescription>
                  Установка модов одним кликом с автоматическим разрешением конфликтов
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="animate-scale-in hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-white" />
                </div>
                <CardTitle>Сообщество</CardTitle>
                <CardDescription>
                  Доступ к библиотеке модов от сообщества и встроенный обмен файлами
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="animate-scale-in hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Wrench" className="text-white" />
                </div>
                <CardTitle>Расширенные настройки</CardTitle>
                <CardDescription>
                  Тонкая настройка параметров для опытных пользователей
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section id="guide" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Руководство</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Начните использовать FixedMods за 3 простых шага
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center animate-fade-in">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Скачайте программу</h3>
                <p className="text-muted-foreground">
                  Загрузите FixedMods с нашего сайта и запустите установщик
                </p>
              </div>
              
              <div className="text-center animate-fade-in">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Выберите игру</h3>
                <p className="text-muted-foreground">
                  Программа автоматически найдёт все поддерживаемые игры на вашем ПК
                </p>
              </div>
              
              <div className="text-center animate-fade-in">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Установите моды</h3>
                <p className="text-muted-foreground">
                  Выберите нужные моды и нажмите "Установить" - всё остальное сделает программа
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Поддержка</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ответы на часто задаваемые вопросы
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  Безопасно ли использовать FixedMods для модификации игр?
                </AccordionTrigger>
                <AccordionContent>
                  Да, FixedMods полностью безопасен. Программа создаёт резервные копии всех изменяемых файлов 
                  и проверяет все моды на наличие вредоносного кода перед установкой.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  Какие игры поддерживает FixedMods?
                </AccordionTrigger>
                <AccordionContent>
                  FixedMods поддерживает более 1000 популярных игр, включая GTA, Skyrim, Minecraft, Fallout, 
                  Call of Duty и многие другие. Список постоянно обновляется.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  Можно ли откатить изменения после установки модов?
                </AccordionTrigger>
                <AccordionContent>
                  Конечно! FixedMods автоматически создаёт точки восстановления перед каждой установкой. 
                  Вы можете в любой момент откатить изменения одним кликом.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  Нужно ли платить за использование программы?
                </AccordionTrigger>
                <AccordionContent>
                  Нет, FixedMods полностью бесплатен и всегда будет таким. 
                  Никаких скрытых платежей, подписок или ограничений.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Готовы начать модификацию игр?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к миллионам геймеров, которые уже используют FixedMods
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            <Icon name="Download" className="mr-2" />
            Скачать FixedMods бесплатно
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <img src="/img/d1d9b660-d385-4958-82ac-f3b49a5e8060.jpg" alt="FixedMods" className="w-8 h-8 rounded" />
              <span className="text-xl font-bold">FixedMods</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Mail" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="MessageCircle" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Github" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
            <p>&copy; 2024 FixedMods. Все права защищены. Бесплатная программа для модификации игр.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}