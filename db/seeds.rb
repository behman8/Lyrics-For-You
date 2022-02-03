# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Song.destroy_all

puts "Seeding Songs!"

Song.create([{
    title: "Right Now", 
    lyrics: "You said 'what am I supposed to do?' Because I'm drowning in inches of water with you And what am I supposed to say? 'You know you're the reason I'm acting this way'And you weren't there when I was in over my head The room is spinning around again And I'm working on my ways because I haven't been very honest lately Can you keep me from falling asleep tonight? You're the only thing making me feel alright Skyscraper building falling down around me Can you keep me from falling asleep again? And falling too deep again You built a wall, and I tore it down You took a breath and stole the words out of my mouth But what I wanted to say, I was trying to fix this with everything, everything Can you keep me from falling asleep tonight? You're the only thing making me feel alright Skyscraper building falling down around me Can you keep me from falling asleep again? What are we supposed to do? We're still drowning in inches of water because of you What do you want me to say? I know what I did but I want you to stay Can you keep me from falling asleep tonight? You're the only thing making me feel alright Skyscraper building falling down around Me Can you keep me from falling asleep again? Can you keep me from falling asleep tonight? You're the only thing making me feel alright Skyscraper building falling down around me Can you keep me from falling asleep again? From falling asleep again? But I felt the pressure of water over my head You weren't there when I started to Sink again I know we're running out of time Right here, right now, you were holding on But I let go, yeah, I let go (Can you keep me from falling asleep tonight?) I know we're running out of time You said 'what am I supposed to do?' We're still drowning in inches of water because of you What do you want me to say? I know what I did but I really just want you to stay", 
    artist: "In Her Own Words", 
    time: 211, 
    album: "Steady Glow",
    user_id: 1
},
{
    title: "Unrequited Love", 
    lyrics: "Thought by now you would be so goddamn tired of
    Always lying awake from unrequited love
    I find it so hard, learning to let go
    Of something just out of reach
    Something I'll never know

    Can you stay? Don't go
    Don't leave me all alone
    I hate when my own mind plays tricks and starts to roam
    My codependency gets the best of me
    But through rose-tinted glasses is the world I see

    You got my heart ensnared, my vision impaired
    Don't act like you care when you were never there

    Thought by now you would be so goddamn tired of
    Always lying awake from unrequited love
    I find it so hard, learning to let go
    Of something just out of reach
    Something I'll never know

    If I wait too long it always feels so wrong
    We're stuck on repeat singing the same old song
    In every melody you'll find a piece of me
    But through rose-tinted glasses is the world I see
    We can't be repaired, there's no damage here
    Why the hell would you care when you were never there?

    Your mind's a temple but it's barren
    Your words familiar but so foreign
    Why do we plague ourselves with a million tales
    When all we're doing is creating our own hell?

    You were my cue to wait for the loneliness
    But I think it's time that I digress

    Thought by now you would be so goddamn tired of
    Always lying awake from unrequited love
    I find it so hard, learning to let go
    Of something just out of reach
    Something I'll never know

    I thought by now you'd be tired of
    Chasing unrequited love
    Even when I'm out of breath I try to keep up
    Chasing unrequited love

    And if it's all the same to you
    I'd like to see it through
    Make amends, it depends what you wanna do
    Quell the ache in my chest before it consumes you
    And all the time that you've had
    All the loves you let go
    Did you ever feel whole at all?
    What kind of puzzle is this?
    There's pieces missing again
    And the paint on the surface is wearing thin

    And all the time that you've had
    All the loves you let go
    Did you ever feel whole at all?
    What kind of puzzle is this?
    There's pieces missing again
    And the paint on the surface is wearing thin

    What kind of puzzle is this?
    There's pieces missing again
    And the paint on the surface is wearing thin
    Are we building it back only just to pretend
    There was something there to begin with?

    Thought by now you would be so goddamn tired of
    Always lying awake from unrequited love
    I find it so hard, learning to let go
    Of something just out of reach
    Something I'll never know
    I thought by now you'd be tired of
    Chasing unrequited love
    Even when I'm out of breath I try to keep up
    Chasing unrequited love", 
    artist: "Valiant Hearts", 
    time: 310, 
    album: "Yonder",
    user_id: 1
},
{
    title: "lvl99ROIDMAGE", 
    lyrics: "Holes made by the sun
    Marks on the outside by a knife
    I'm asking myself why I can never feel the rest
    Isn't it obvious
    It's not surreal
    I'm sure it's in all of us
    Broken but healed
    Can't remember who I was
    Recall my younger skin
    Reflection doesn't show
    Everything within
    We're wide-eyed
    A constant to keep me in your skin
    And could I remember to clear up where I've been
    I'm wondering
    Don't be so afraid
    When I know you're why I was made
    You can stay focused on my hand
    Maybe one more step ahead
    I need to be next to you my love
    You're Makin me feel whole again
    We're wide-eyed
    A constant to keep me in your skin
    And could I remember to clear up where I've been
    I'm wondering
    I'm so glad I have you with me
    Keep your hand in mine, I know we'll be alright
    I know we'll be alright
    We're wide-eyed
    A constant to keep me in your skin
    And could I remember to clear up where I've been
    I'm wondering
    Lying alone sinking deep into myself
    My memories pull me back from drowning
    Lying awake thinking of ways to heal myself
    Fading in and out of dreaming", 
    artist: "Bilmuri, Seneca", 
    time: 201, 
    album: "400LB BACK SQUAT",
    user_id: 1
},
{
    title: "new low", 
    lyrics: "(Million other things)
    (There's a million other things I could have)
    (Million other things)

    I tried to fake it
    But I never thought I'd end up making everything about me
    (Ooh, everything about me)
    Yeah, I tried to shake it
    But I never could imagine you would move along without me
    (Yeah, along without me)
    How could you save me if I stay fuckin' up?
    (Seems I never learn my lesson, baby)
    The patience you gave me, I stay runnin' up
    (Ooh, runnin' up)

    But I know
    This is just how these things go
    I've been in touch with my new low
    And if I could, I'd let you know

    (And show you why I)
    Shut my mouth so often
    'Cause no one wants to hear what I've been talkin'
    And over time, I don't know what was real or in my head
    And there's a million other things I could've said

    Yeah, I've tried to keep my feelings covered up
    Covered up

    But I know
    This is just how these things go
    I've been in touch with my new low
    And it's showing, you ain't gotta know it
    We've been over this before
    (And tell me, where did that go now?)
    We dance in perfect circles
    I can't help but play myself
    One foot forward, three steps backwards
    Now I can't keep up

    I'll show you why I shut my mouth so often
    'Cause no one wants to hear what I've been talkin'
    And over time, I don't know what was real or in my head
    And there's a million other things I could've said

    (Million other things)
    (There's a million other things I could have)
    (Million other things)
    There's a million other things I could've said
    (Million other things) Hey
    (There's a million other things I could have) Ooh
    (Million other things)
    And I don't know if this feeling's going away

    So cut me wide open
    Look at the scars you left inside
    Help me make light of the bleeding
    Until there's nothing left behind

    I'll show you why I shut my mouth so often
    'Cause no one wants to hear what I've been talkin'
    (No one wants to hear what I've been talkin', baby)
    And over time, I don't know what was real or in my head
    (What was real or in my head)
    And there's a million other things I could've said

    (Million other things)
    (There's a million other things I could have)
    Ooh, there's a million things I could have
    (Million other things)
    No, I can't help myself
    (Million other things) Hey
    (There's a million other things I could have) Ooh yeah
    (Million other things)
    And I don't know if this feeling's going away, no

    We dance in perfect circles
    I can't help but play myself (I can't help but play myself)
    One foot forward, three steps backwards
    Now I can't keep up with you
    (Million other things)
    (There's a million other things I could have)
    (Million other things)
    With you
    (Million other things)
    (There's a million other things I could have)
    (Million other things)", 
    artist: "nightlife", 
    time: 296, 
    album: "new low",
    user_id: 1
}])

puts "Songs seeded!"