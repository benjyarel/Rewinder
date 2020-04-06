
# First Seed without Validations

puts "Cleaning DB 🕳"
User.destroy_all
Movie.destroy_all
MovieReview.destroy_all
Bookmark.destroy_all

puts "Creating users"
User.create!( first_name: "Benjamin", last_name:'Leray', email:"b.leray35@gmail.com", password:'password')
User.create!( first_name: "Emmanuel", last_name:'Macron', email:"kiki@gmail.com", password:'password')

puts "Creating movies"
Movie.create!( title:'La Haine' , year:'1995', director:'Mathieu Kassovitz',poster_path:'https://image.tmdb.org/t/p/w1280/3nVoVV0RmweOgDjebtI8CFv13rf.jpg', synopsis:"Trois copains d'une banlieue ordinaire traînent leur ennui et leur jeunesse qui se perd. Ils vont vivre la journée la plus importante de leur vie après une nuit d'émeutes provoquée par le passage à tabac d'Abdel Ichah par un inspecteur de police lors d'un interrogatoire." )

puts "Creating bookmarks"
5.times do
  Bookmark.create!(user: User.first , movie: Movie.first)
end
Bookmark.create!(user: User.last , movie: Movie.first)

puts "Creating movie reviews"
4.times do
  MovieReview.create!(
   user: User.first,
   movie: Movie.first,
   rating: 7,
   short_review: " J'ai bien aimé lol",
   directing_review: 'il touche le mec',
   acting_review: 'ils sont bons les acteurs',
   sound_review: 'Assassin de la police, woup woup!',
   story_review: "L'important, c'est l'aterrisage.",
   foreign_link: "https://police-nationale.com"
  )
end
puts "Faking DB done ! 🌱"
