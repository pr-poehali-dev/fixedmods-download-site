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
            <img src="/img/d25cf3cc-fbe6-41f3-aeca-9cf3f8f9f5b5.jpg" alt="FixedMods" className="w-10 h-10 rounded-lg" />
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
              Умная программа для исправления и оптимизации Minecraft модов. 
              Проверка совместимости, исправление ошибок, удаление дубликатов и устаревших модов.
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
              Профессиональные инструменты для работы с Minecraft модами
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="animate-scale-in hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Settings" className="text-white" />
                </div>
                <CardTitle>Проверка совместимости</CardTitle>
                <CardDescription>
                  Автоматический анализ конфликтов между модами и предложение решений
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="animate-scale-in hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" className="text-white" />
                </div>
                <CardTitle>Исправление ошибок</CardTitle>
                <CardDescription>
                  Диагностика и автоматическое исправление проблем в файлах модов
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="animate-scale-in hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Bug" className="text-white" />
                </div>
                <CardTitle>Удаление дубликатов</CardTitle>
                <CardDescription>
                  Поиск и удаление повторяющихся модов для оптимизации производительности
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="animate-scale-in hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" className="text-white" />
                </div>
                <CardTitle>Обновление модов</CardTitle>
                <CardDescription>
                  Автоматическое обнаружение устаревших модов и обновление до новых версий
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="animate-scale-in hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-white" />
                </div>
                <CardTitle>База данных модов</CardTitle>
                <CardDescription>
                  Встроенная база данных с информацией о совместимости тысяч Minecraft модов
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="animate-scale-in hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Wrench" className="text-white" />
                </div>
                <CardTitle>Резервное копирование</CardTitle>
                <CardDescription>
                  Автоматическое создание резервных копий перед внесением изменений
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
              Оптимизируйте свои Minecraft моды за 3 простых шага
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center animate-fade-in">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Укажите папку с модами</h3>
                <p className="text-muted-foreground">
                  Выберите папку mods вашего Minecraft и запустите сканирование
                </p>
              </div>
              
              <div className="text-center animate-fade-in">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Проанализируйте моды</h3>
                <p className="text-muted-foreground">
                  FixedMods проверит совместимость и найдёт проблемы в ваших модах
                </p>
              </div>
              
              <div className="text-center animate-fade-in">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Исправьте проблемы</h3>
                <p className="text-muted-foreground">
                  Одним кликом исправьте ошибки, удалите дубликаты и обновите устаревшие моды
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
                  Безопасно ли использовать FixedMods для работы с Minecraft модами?
                </AccordionTrigger>
                <AccordionContent>
                  Да, FixedMods полностью безопасен. Программа создаёт резервные копии всех файлов 
                  перед внесением изменений и использует только проверенные методы исправления.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  Какие версии Minecraft поддерживает FixedMods?
                </AccordionTrigger>
                <AccordionContent>
                  FixedMods поддерживает все популярные версии Minecraft: 1.16, 1.17, 1.18, 1.19, 1.20 и новее, 
                  включая Forge, Fabric и Quilt модлоадеры.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  Можно ли откатить изменения после исправления модов?
                </AccordionTrigger>
                <AccordionContent>
                  Конечно! FixedMods автоматически создаёт резервные копии перед каждым исправлением. 
                  Вы можете в любой момент восстановить оригинальные файлы одним кликом.
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
            Готовы оптимизировать свои Minecraft моды?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам игроков, которые уже используют FixedMods для стабильной игры
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
              <img src="/img/d25cf3cc-fbe6-41f3-aeca-9cf3f8f9f5b5.jpg" alt="FixedMods" className="w-8 h-8 rounded" />
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
            <p>&copy; 2024 FixedMods. Все права защищены. Бесплатная программа для оптимизации Minecraft модов.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}