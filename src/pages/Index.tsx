import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  const downloadOptions = [
    {
      category: "Desktop",
      platforms: [
        { name: "Windows", icon: "Monitor", version: "64-bit / 32-bit", size: "45 MB" },
        { name: "macOS", icon: "Apple", version: "Intel / Apple Silicon", size: "42 MB" },
        { name: "Linux", icon: "Terminal", version: "AppImage / DEB / RPM", size: "38 MB" },
        { name: "Ubuntu", icon: "Package", version: "20.04+", size: "38 MB" },
        { name: "Arch Linux", icon: "Box", version: "AUR Package", size: "38 MB" },
        { name: "Fedora", icon: "Package2", version: "35+", size: "38 MB" }
      ]
    },
    {
      category: "Mobile",
      platforms: [
        { name: "Android", icon: "Smartphone", version: "8.0+", size: "25 MB" },
        { name: "iOS", icon: "Apple", version: "14.0+", size: "28 MB" }
      ]
    },
    {
      category: "Portable",
      platforms: [
        { name: "Portable Windows", icon: "FolderOpen", version: "No install", size: "52 MB" },
        { name: "Web Version", icon: "Globe", version: "Browser", size: "Online" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/10">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b animate-slide-up">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/img/d25cf3cc-fbe6-41f3-aeca-9cf3f8f9f5b5.jpg" alt="FixedMods" className="w-10 h-10 rounded-lg animate-bounce-in hover:animate-rotate-y" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-slide-left">
              FixedMods
            </h1>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 hover:text-primary">Возможности</a>
            <a href="#guide" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 hover:text-primary">Руководство</a>
            <a href="#support" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 hover:text-primary">Поддержка</a>
            <Dialog>
              <DialogTrigger asChild>
                <Button onClick={() => setIsDownloadOpen(true)} className="hover:animate-pulse-scale transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">Скачать</Button>
              </DialogTrigger>
            </Dialog>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-gradient-to-r from-primary to-secondary text-white animate-bounce-in hover:animate-glow">
              Бесплатно навсегда
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-slide-up hover:animate-float">
              FixedMods
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
              Умная программа для исправления и оптимизации Minecraft модов. 
              Проверка совместимости, исправление ошибок, удаление дубликатов и устаревших модов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog open={isDownloadOpen} onOpenChange={setIsDownloadOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 animate-bounce-in hover:animate-glow hover:scale-105 transition-all duration-300" style={{animationDelay: '0.4s'}}>
                    <Icon name="Download" className="mr-2" />
                    Скачать FixedMods
                  </Button>
                </DialogTrigger>
              </Dialog>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 animate-bounce-in hover:scale-105 hover:border-primary/50 transition-all duration-300" style={{animationDelay: '0.6s'}}>
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
            <Card className="animate-scale-in hover:scale-105 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group" style={{animationDelay: '0.1s'}}>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 group-hover:animate-float">
                  <Icon name="Settings" className="text-white group-hover:animate-pulse" />
                </div>
                <CardTitle>Проверка совместимости</CardTitle>
                <CardDescription>
                  Автоматический анализ конфликтов между модами и предложение решений
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="animate-scale-in hover:scale-105 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group" style={{animationDelay: '0.1s'}}>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 group-hover:animate-float">
                  <Icon name="Shield" className="text-white group-hover:animate-pulse" />
                </div>
                <CardTitle>Исправление ошибок</CardTitle>
                <CardDescription>
                  Диагностика и автоматическое исправление проблем в файлах модов
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="animate-scale-in hover:scale-105 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group" style={{animationDelay: '0.1s'}}>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 group-hover:animate-float">
                  <Icon name="Bug" className="text-white group-hover:animate-pulse" />
                </div>
                <CardTitle>Удаление дубликатов</CardTitle>
                <CardDescription>
                  Поиск и удаление повторяющихся модов для оптимизации производительности
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="animate-scale-in hover:scale-105 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group" style={{animationDelay: '0.1s'}}>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 group-hover:animate-float">
                  <Icon name="Zap" className="text-white group-hover:animate-pulse" />
                </div>
                <CardTitle>Обновление модов</CardTitle>
                <CardDescription>
                  Автоматическое обнаружение устаревших модов и обновление до новых версий
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="animate-scale-in hover:scale-105 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group" style={{animationDelay: '0.1s'}}>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 group-hover:animate-float">
                  <Icon name="Users" className="text-white group-hover:animate-pulse" />
                </div>
                <CardTitle>База данных модов</CardTitle>
                <CardDescription>
                  Встроенная база данных с информацией о совместимости тысяч Minecraft модов
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="animate-scale-in hover:scale-105 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group" style={{animationDelay: '0.1s'}}>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 group-hover:animate-float">
                  <Icon name="Wrench" className="text-white group-hover:animate-pulse" />
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
              <div className="text-center animate-fade-in group" style={{animationDelay: '0.2s'}}>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold group-hover:animate-bounce-in hover:shadow-lg hover:shadow-primary/25">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Укажите папку с модами</h3>
                <p className="text-muted-foreground">
                  Выберите папку mods вашего Minecraft и запустите сканирование
                </p>
              </div>
              
              <div className="text-center animate-fade-in group" style={{animationDelay: '0.4s'}}>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold group-hover:animate-bounce-in hover:shadow-lg hover:shadow-primary/25">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Проанализируйте моды</h3>
                <p className="text-muted-foreground">
                  FixedMods проверит совместимость и найдёт проблемы в ваших модах
                </p>
              </div>
              
              <div className="text-center animate-fade-in group" style={{animationDelay: '0.6s'}}>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold group-hover:animate-bounce-in hover:shadow-lg hover:shadow-primary/25">
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
          <Dialog open={isDownloadOpen} onOpenChange={setIsDownloadOpen}>
            <DialogTrigger asChild>
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4 animate-bounce-in hover:animate-glow hover:scale-105 transition-all duration-300">
                <Icon name="Download" className="mr-2" />
                Скачать FixedMods бесплатно
              </Button>
            </DialogTrigger>
          </Dialog>
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

      {/* Download Modal */}
      <Dialog open={isDownloadOpen} onOpenChange={setIsDownloadOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Скачать FixedMods
            </DialogTitle>
            <DialogDescription className="text-center text-muted-foreground">
              Выберите версию для вашей операционной системы
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 mt-6">
            {downloadOptions.map((category) => (
              <div key={category.category} className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <Icon name={category.category === "Desktop" ? "Monitor" : category.category === "Mobile" ? "Smartphone" : "Package"} className="w-5 h-5" />
                  {category.category}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-3">
                  {category.platforms.map((platform) => (
                    <Card key={platform.name} className="hover:shadow-md transition-shadow cursor-pointer group">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                              <Icon name={platform.icon} className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium text-foreground">{platform.name}</h4>
                              <p className="text-sm text-muted-foreground">{platform.version}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium text-foreground">{platform.size}</div>
                            <Button size="sm" className="mt-1 h-7 px-3 text-xs">
                              <Icon name="Download" className="w-3 h-3 mr-1" />
                              Скачать
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
            <div className="flex items-start gap-3">
              <Icon name="Info" className="w-5 h-5 text-primary mt-0.5" />
              <div className="text-sm text-muted-foreground">
                <p className="font-medium text-foreground mb-1">Системные требования:</p>
                <p>• Java 8+ для всех платформ</p>
                <p>• Minecraft 1.16+ установлен</p>
                <p>• 2 ГБ свободного места на диске</p>
                <p>• Интернет для проверки обновлений модов</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t">
            <Button variant="outline" onClick={() => setIsDownloadOpen(false)}>
              Закрыть
            </Button>
            <Button className="bg-gradient-to-r from-primary to-secondary">
              <Icon name="ExternalLink" className="w-4 h-4 mr-2" />
              Открыть в GitHub
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}