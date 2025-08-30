import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Icon from '@/components/ui/icon'

export default function Index() {
  const [currentQuiz, setCurrentQuiz] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState<string[]>([])

  const jobVacancies = [
    {
      title: 'Frontend Developer',
      company: 'TechStart',
      location: 'Москва',
      salary: '50,000 - 80,000 ₽',
      type: 'Стажировка',
      skills: ['React', 'JavaScript', 'CSS'],
      description: 'Ищем молодого и амбициозного разработчика для работы с современными технологиями'
    },
    {
      title: 'UX/UI Designer',
      company: 'DesignLab',
      location: 'Санкт-Петербург',
      salary: '45,000 - 70,000 ₽',
      type: 'Частичная занятость',
      skills: ['Figma', 'Photoshop', 'Иллюстрация'],
      description: 'Создавай удивительные интерфейсы для мобильных и веб приложений'
    },
    {
      title: 'SMM-менеджер',
      company: 'MediaWave',
      location: 'Удаленно',
      salary: '30,000 - 50,000 ₽',
      type: 'Проектная работа',
      skills: ['Instagram', 'TikTok', 'Контент'],
      description: 'Развивай социальные сети брендов и создавай вирусный контент'
    }
  ]

  const quizQuestions = [
    {
      question: 'Что тебе больше всего нравится делать?',
      options: ['Создавать что-то новое', 'Решать сложные задачи', 'Работать с людьми', 'Анализировать данные']
    },
    {
      question: 'Какая рабочая среда тебе подходит?',
      options: ['Творческая студия', 'Офис с командой', 'Домашний офис', 'Коворкинг']
    },
    {
      question: 'Что мотивирует тебя больше всего?',
      options: ['Признание таланта', 'Высокая зарплата', 'Интересные задачи', 'Карьерный рост']
    }
  ]

  const achievements = [
    { title: 'Первое собеседование', icon: 'Trophy', completed: true, points: 100 },
    { title: 'Профиль заполнен на 100%', icon: 'User', completed: true, points: 150 },
    { title: 'Пройден тест профориентации', icon: 'Brain', completed: false, points: 200 },
    { title: '5 откликов на вакансии', icon: 'Target', completed: false, points: 250 }
  ]

  const handleQuizAnswer = (answer: string) => {
    const newAnswers = [...quizAnswers]
    newAnswers[currentQuiz] = answer
    setQuizAnswers(newAnswers)
    
    if (currentQuiz < quizQuestions.length - 1) {
      setCurrentQuiz(currentQuiz + 1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Briefcase" size={20} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              CareerStart
            </h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Button variant="ghost" className="hover:text-primary">Вакансии</Button>
            <Button variant="ghost" className="hover:text-secondary">Профориентация</Button>
            <Button variant="ghost" className="hover:text-accent">Портфолио</Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Войти
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Твоя карьера <br />начинается здесь
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Платформа для школьников 9-11 классов. Найди свою первую работу, пройди профориентацию и покажи свои достижения
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg transform hover:scale-105 transition-all">
              <Icon name="Search" size={20} className="mr-2" />
              Найти вакансию
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-white">
              <Icon name="Brain" size={20} className="mr-2" />
              Пройти тест
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        <Tabs defaultValue="vacancies" className="w-full">
          <TabsList className="grid grid-cols-4 mb-8 bg-white/50 backdrop-blur-sm">
            <TabsTrigger value="vacancies" className="flex items-center gap-2">
              <Icon name="Briefcase" size={16} />
              Вакансии
            </TabsTrigger>
            <TabsTrigger value="quiz" className="flex items-center gap-2">
              <Icon name="Brain" size={16} />
              Профориентация
            </TabsTrigger>
            <TabsTrigger value="achievements" className="flex items-center gap-2">
              <Icon name="Award" size={16} />
              Достижения
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <Icon name="User" size={16} />
              Профиль
            </TabsTrigger>
          </TabsList>

          <TabsContent value="vacancies" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold">Актуальные вакансии</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Icon name="Filter" size={16} className="mr-2" />
                  Фильтры
                </Button>
                <Button variant="outline" size="sm">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  Город
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobVacancies.map((job, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border-l-4 border-l-primary">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                        <CardDescription className="text-lg font-medium text-secondary">
                          {job.company}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-accent/20 text-accent border-accent">
                        {job.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-muted-foreground">
                        <Icon name="MapPin" size={16} className="mr-1" />
                        {job.location}
                      </div>
                      <div className="text-primary font-semibold">{job.salary}</div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-gradient-to-r from-primary to-secondary">
                        Откликнуться
                      </Button>
                      <Button variant="outline" size="icon">
                        <Icon name="Heart" size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="quiz" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Тест на профориентацию</h2>
              <p className="text-muted-foreground">Узнай, какая профессия подходит именно тебе</p>
            </div>

            {currentQuiz < quizQuestions.length ? (
              <Card className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-between items-center mb-4">
                    <CardTitle>Вопрос {currentQuiz + 1} из {quizQuestions.length}</CardTitle>
                    <div className="text-sm text-muted-foreground">
                      {Math.round(((currentQuiz) / quizQuestions.length) * 100)}% завершено
                    </div>
                  </div>
                  <Progress value={((currentQuiz) / quizQuestions.length) * 100} className="mb-6" />
                  <CardDescription className="text-lg">
                    {quizQuestions[currentQuiz].question}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-3">
                    {quizQuestions[currentQuiz].options.map((option, optionIndex) => (
                      <Button
                        key={optionIndex}
                        variant="outline"
                        className="justify-start p-4 h-auto hover:bg-primary hover:text-white transition-all"
                        onClick={() => handleQuizAnswer(option)}
                      >
                        <span className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center mr-3 text-secondary">
                          {String.fromCharCode(65 + optionIndex)}
                        </span>
                        {option}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Trophy" size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">Тест завершен!</CardTitle>
                  <CardDescription>Основываясь на твоих ответах, мы рекомендуем:</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="bg-white/80 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-bold text-primary mb-2">IT-специалист</h3>
                    <p className="text-muted-foreground mb-4">
                      Тебе подходят профессии в сфере информационных технологий
                    </p>
                    <div className="flex justify-center gap-2 flex-wrap">
                      <Badge className="bg-primary">Frontend Developer</Badge>
                      <Badge className="bg-secondary">UX/UI Designer</Badge>
                      <Badge className="bg-accent">Data Analyst</Badge>
                    </div>
                  </div>
                  <Button 
                    onClick={() => {setCurrentQuiz(0); setQuizAnswers([])}}
                    className="bg-gradient-to-r from-primary to-secondary"
                  >
                    Пройти тест заново
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Твои достижения</h2>
              <div className="flex justify-center items-center gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">250</div>
                  <div className="text-sm text-muted-foreground">Очков опыта</div>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">2</div>
                  <div className="text-sm text-muted-foreground">Достижений</div>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">Новичок</div>
                  <div className="text-sm text-muted-foreground">Уровень</div>
                </div>
              </div>
              <Progress value={60} className="max-w-md mx-auto" />
              <p className="text-sm text-muted-foreground mt-2">До следующего уровня: 150 очков</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index} 
                  className={`transition-all duration-300 hover:scale-105 ${
                    achievement.completed 
                      ? 'bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/50' 
                      : 'bg-white/80 backdrop-blur-sm'
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        achievement.completed 
                          ? 'bg-gradient-to-r from-primary to-secondary text-white' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        <Icon name={achievement.icon as any} size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{achievement.title}</h3>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">
                            +{achievement.points} очков
                          </span>
                          {achievement.completed ? (
                            <Badge className="bg-primary">Выполнено</Badge>
                          ) : (
                            <Badge variant="outline">В процессе</Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-accent/10 to-primary/10 border-accent/30">
              <CardHeader className="text-center">
                <Icon name="Award" size={48} className="mx-auto mb-4 text-accent" />
                <CardTitle>Получи сертификат!</CardTitle>
                <CardDescription>
                  Заверши все достижения и получи официальный сертификат о прохождении профориентации
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="bg-gradient-to-r from-accent to-primary" disabled>
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать сертификат
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <div className="max-w-2xl mx-auto">
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="User" size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">Алексей Иванов</CardTitle>
                  <CardDescription>11 класс • Москва</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-2">О себе</h3>
                      <p className="text-muted-foreground">
                        Увлекаюсь программированием и дизайном. Хочу связать свою жизнь с IT-сферой.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Навыки</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge>JavaScript</Badge>
                        <Badge>Python</Badge>
                        <Badge>Figma</Badge>
                        <Badge>Photoshop</Badge>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Интересы</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Веб-разработка</Badge>
                        <Badge variant="outline">Дизайн</Badge>
                        <Badge variant="outline">Стартапы</Badge>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                      <Icon name="Edit" size={16} className="mr-2" />
                      Редактировать профиль
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-muted/50 py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Briefcase" size={16} className="text-white" />
            </div>
            <span className="font-bold text-lg">CareerStart</span>
          </div>
          <p className="text-muted-foreground">
            Платформа для начала карьеры школьников 9-11 классов
          </p>
        </div>
      </footer>
    </div>
  )
}