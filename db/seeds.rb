
# First Seed without Validations
lorem_40w = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque tellus sed fermentum rutrum. Sed mattis congue nisl, in dapibus mi vestibulum quis. Nunc rutrum tristique maximus. Nullam quis tempus purus. Morbi nulla magna, lacinia quis dolor a, varius interdum."

puts "Cleaning DB 🕳"
User.destroy_all
Movie.destroy_all
MovieReview.destroy_all
Bookmark.destroy_all

puts "Creating users"
User.create!( first_name: "Benjamin", last_name:'Leray', email:"b.leray35@gmail.com", password:'password')
User.create!( first_name: "Emmanuel", last_name:'Macron', email:"kiki@gmail.com", password:'password')

puts "Creating movies"
Movie.create!(
  title:'La Haine',
  year:'1995',
  director:'Mathieu Kassovitz',
  poster_path:'3nVoVV0RmweOgDjebtI8CFv13rf.jpg',
  synopsis: "Trois copains d'une banlieue ordinaire traînent leur ennui et leur jeunesse qui se perd. Ils vont vivre la journée la plus importante de leur vie après une nuit d'émeutes provoquée par le passage à tabac d'Abdel Ichah par un inspecteur de police lors d'un interrogatoire.",
  tmdb_id: 24
)

Movie.create!(
  title: "Batman: Le film",
  year: 1966,
  director:"Leslie H.Martinson",
  poster_path: "ltvRETeZjHNnptonNuHTn5olhl8.jpg",
  synopsis: lorem_40w,
  tmdb_id: 2661
)

Movie.create!(
  title:"Kill Bill: Vol 1",
  year: 2003 ,
  director:"Quentin Tarantino",
  poster_path:"udRaQKzT0LG4iQFxHLaYjno9uAT.jpg",
  synopsis: lorem_40w,
  tmdb_id: 406
)

puts "Creating bookmarks, movie reviews for benjamin"
movies = Movie.all
movies.each  do |movie|
  Bookmark.create!(user: User.first , movie: movie)
  MovieReview.create!(
   user: User.first,
   movie: movie,
   rating: 7,
   short_review: " J'ai bien aimé lol",
   directing_review: lorem_40w,
   acting_review: lorem_40w,
   sound_review: lorem_40w,
   story_review: lorem_40w,
   foreign_link: "https://police-nationale.com"
  )
end

puts 'create review and bookmark for second user'
Bookmark.create!(user: User.last , movie: Movie.first)
2.times do
  MovieReview.create!(
   user: User.last,
   movie: Movie.first,
   rating: 1,
   short_review: "pas benjam",
   directing_review: 'il touche le mec',
   acting_review: 'ils sont bons les acteurs',
   sound_review: 'Assassin de la police, woup woup!',
   story_review: "L'important, c'est l'aterrisage.",
   foreign_link: "https://police-nationale.com"
  )
end
puts "Faking DB done ! 🌱"
