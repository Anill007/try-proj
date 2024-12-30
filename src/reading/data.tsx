const data = {
  id: '111111',
  instructions: `READING PASSAGE 1
  You should spend about 20 minutes on Questions 1-13 which are based on Reading Passage 1 below.`,
  passage: {
    title: `Henry Moore (1898-1986)
    The British sculptor Henry Moore was a leading figure in the 20th-century art world`,
    body: `Henry Moore was born in Castleford, a small town near Leeds in the north of England. He was the seventh child of Raymond Moore and his wife Mary Baker. He studied at Castleford Grammar School from 1909 to 1915, where his early interest in art was encouraged by his teacher Alice Gostick. After leaving school, Moore hoped to become a sculptor, but instead he complied with his father’s wish that he train as a schoolteacher. He had to abandon his training in 1917 when he was sent to France to fight in the First World War.

    After the war, Moore enrolled at the Leeds School of Art, where he studied for two years. In his first year, he spent most of his time drawing. Although he wanted to study sculpture, no teacher was appointed until his second year. At the end of that year, he passed the sculpture examination and was awarded a scholarship to the Royal College of Art in London. In September 1921, he moved to London and began three years of advanced study in sculpture.
    
    Alongside the instruction he received at the Royal College, Moore visited many of the London museums, particularly the British Museum, which had a wide-ranging collection of ancient sculpture. During these visits, he discovered the power and beauty of ancient Egyptian and African sculpture. As he became increasingly interested in these ‘primitive’ forms of art, he turned away from European sculptural traditions.
    
    After graduating, Moore spent the first six months of 1925 travelling in France. When he visited the Trocadero Museum in Paris, he was impressed by a cast of a Mayan* sculpture of the rain spirit. It was a male reclining figure with its knees drawn up together, and its head at a right angle to its body. Moore became fascinated with this stone sculpture, which he thought had a power and originality that no other stone sculpture possessed. He himself started carving a variety of subjects in stone, including depiction of reclining women, mother-and-child groups, and masks.
    
    Moore’s exceptional talent soon gained recognition, and in 1926 he started work as a sculpture instructor at the Royal College. In 1933, he became a member of a group of young artists called Unit One. The aim of the group was to convince the English public of the merits of the emerging international movement in modern art and architecture.
    
    Around this time, Moore moved away from the human figure to experiment with abstract shapes. In 1931, he held an exhibition at the Leicester Galleries in London. His work was enthusiastically welcomed by fellow sculptors, but the reviews in the press were extremely negative and turned Moore into a notorious figure. There were calls for his resignation from the Royal College, and the following year, when his contract expired, he left to start a sculpture department at the Chelsea School of Art in London.
    
    Throughout the 1930s, Moore did not show any inclination to please the British public. He became interested in the paintings of the Spanish artist Pablo Picasso, whose work inspired him to distort the human body in a radical way. At times, he seemed to abandon the human figure altogether. The pages of his sketchbooks from this period show his ideas for abstract sculptures that bore little resemblance to the human form.
    
    In 1940, during the Second World War, Moore stopped teaching at the Chelsea School and moved to a farmhouse about 20 miles north of London. A shortage of materials forced him to focus on drawing. He did numerous small sketches of Londoners, later turning these ideas into large coloured drawings in his studio. In 1942, he returned to Castleford to make a series of sketches of the miners who worked there.
    
    In 1944, Harlow, a town near London, offered Moore a commission for a sculpture depicting a family. The resulting work signifies a dramatic change in Moore’s style, away from the experimentation of the 1930s towards a more natural and humanistic subject matter. He did dozens of studies in clay for the sculpture, and these were cast in bronze and issued in editions of seven to nine copies each. In this way, Moore’s work became available to collectors all over the world. The boost to his income enabled him to take on ambitious projects and start working on the scale he felt his sculpture demanded.
    
    Critics who had begun to think that Moore had become less revolutionary were proven wrong by the appearance, in 1950, of the first of Moore’s series of standing figures in bronze, with their harsh and angular pierced forms and distinct impression of menace. Moore also varied his subject matter in the 1950s with such works as Warrior with Shield and Falling Warrior. These were rare examples of Moore’s use of the male figure and owe something to his visit to Greece in 1951, when he had the opportunity to study ancient works of art.
    
    In his final years, Moore created the Henry Moore Foundation to promote art appreciation and to display his work. Moore was the first modern English sculptor to achieve international critical acclaim and he is still regarded as one of the most important sculptors of the 20th century.`
  },
  sections: [
    {
      title: `Questions 1-7`,
      instructions: `Do the following statements agree with the claims of the writer in Reading Passage 1?

      In boxes 1-7 on your answer sheet, write
      
      TRUE               if the statement agrees with the information
      
      FALSE              if the statement contradicts the information
      
      NOT GIVEN    if there is no information on this
      
      `,
      questions: [
        {
          id: '111',
          type: 'single select',
          question: `On leaving school, Moore did what his father wanted him to do.`,
          correctAnswer: 'true',
        },
        {
          id: '222',
          type: 'single select',
          question: `Moore began studying sculpture in his first term at the Leeds School of Art.`,
          correctAnswer: 'true'
        },
        {
          id: '333',
          type: 'single select',
          question: `When Moore started at the Royal College of Art, its reputation for teaching sculpture was excellent.`,
          correctAnswer: 'false'
        },
        {
          id: '444',
          type: 'single select',
          question: `Moore became aware of ancient sculpture as a result of visiting London Museums.`,
          correctAnswer: 'false'
        },
        {
          id: '555',
          type: 'single select',
          question: `The Trocadero Museum’s Mayan sculpture attracted a lot of public interest.`,
          correctAnswer: 'true'
        },
        {
          id: '666',
          type: 'single select',
          question: `Moore thought the Mayan sculpture was similar in certain respects to other stone sculptures.`,
          correctAnswer: 'not given'
        },
        {
          id: '777',
          type: 'single select',
          question: `The artists who belonged to Unit One wanted to make modern art and architecture more popular.`,
          correctAnswer: 'not given'
        }
      ]
    },
    {
      title: `Questions 8-13`,
      instructions: `Complete the notes below.

      Choose ONE WORD ONLY from the passage for each answer.
      
      Write your answers in boxes 8-13 on your answer sheet.`,
      questions: [{
        id: '111111',
        type: 'fill',
        question: [`Moore’s career as an artist
        1930s
        
        ●   Moore’s exhibition at the Leicester Galleries is criticised by the press
        
        ●   Moore is urged to offer his 8`, `and leave the Royal College.
        
        1940s
        
        ●   Moore turns to drawing because 9`, `for sculpting are not readily available
        
        ●   While visiting his hometown, Moore does some drawings of 10`, `
        
        ●   Moore is employed to produce a sculpture of a 11`, `
        
        ●   12`, ` start to buy Moore’s work
        
        ●   Moore’s increased 13`, ` makes it possible for him to do more ambitious sculptures
        
        1950s
        
        ●   Moore’s series of bronze figures marks a further change in his style`],
        correctAnswer: ['aaa', 'bbbb', 'ccc', 'ddd', 'eee', 'ffff',]
      }]
    }
  ]
}

export default data;


// drag and drop
export const dndData = {
  id: '222222',
  instructions: `READING PASSAGE 2
  You should spend about 20 minutes on Questions 14-26 which are based on Reading Passage 2 below. `,
  passage: {
    title: `Why being bored is stimulating – and useful, too
    This most common of emotions is turning out to be more interesting than we thought`,
    body: `We all know how it feels – it’s impossible to keep your mind on anything, time stretches out, and all the things you could do seem equally unlikely to make you feel better. But defining boredom so that it can be studied in the lab has proved difficult. For a start, it can include a lot of other mental states, such as frustration, apathy, depression and indifference. There isn’t even agreement over whether boredom is always a low-energy, flat kind of emotion or whether feeling agitated and restless counts as boredom, too. In his book, Boredom: A Lively History, Peter Toohey at the University of Calgary, Canada, compares it to disgust – an emotion that motivates us to stay away from certain situations. ‘If disgust protects humans from infection, boredom may protect them from “infectious” social situations,’ he suggests.

    @@12345@@
    
    By asking people about their experiences of boredom, Thomas Goetz and his team at the University of Konstanz in Germany have recently identified five distinct types: indifferent, calibrating, searching, reactant and apathetic. These can be plotted on two axes – one running left to right, which measures low to high arousal, and the other from top to bottom, which measures how positive or negative the feeling is. Intriguingly, Goetz has found that while people experience all kinds of boredom, they tend to specialise in one. Of the five types, the most damaging is ‘reactant’ boredom with its explosive combination of high arousal and negative emotion. The most useful is what Goetz calls ‘indifferent’ boredom: someone isn’t engaged in anything satisfying but still feels relaxed and calm. However, it remains to be seen whether there are any character traits that predict the kind of boredom each of us might be prone to.
    
    @@12345@@
    
    Psychologist Sandi Mann at the University of Central Lancashire, UK, goes further. ‘All emotions are there for a reason, including boredom,’ she says. Mann has found that being bored makes us more creative. ‘We’re all afraid of being bored but in actual fact it can lead to all kinds of amazing things,’ she says. In experiments published last year, Mann found that people who had been made to feel bored by copying numbers out of the phone book for 15 minutes came up with more creative ideas about how to use a polystyrene cup than a control group. Mann concluded that a passive, boring activity is best for creativity because it allows the mind to wander. In fact, she goes so far as to suggest that we should seek out more boredom in our lives.
    
    @@12345@@
    
    Psychologist John Eastwood at York University in Toronto, Canada, isn’t convinced. ‘If you are in a state of mind-wandering you are not bored,’ he says. ‘In my view, by definition boredom is an undesirable state.’ That doesn’t necessarily mean that it isn’t adaptive, he adds. ‘Pain is adaptive – if we didn’t have physical pain, bad things would happen to us. Does that mean that we should actively cause pain? No. But even if boredom has evolved to help us survive, it can still be toxic if allowed to fester.’ For Eastwood, the central feature of boredom is a failure to put our ‘attention system’ into gear. This causes an inability to focus on anything, which makes time seem to go painfully slowly. What’s more, your efforts to improve the situation can end up making you feel worse. ‘People try to connect with the world and if they are not successful there’s that frustration and irritability,’ he says. Perhaps most worryingly, says Eastwood, repeatedly failing to engage attention can lead to state where we don’t know what to do any more, and no longer care.
    
    @@12345@@
    
    Eastwood’s team is now trying to explore why the attention system fails. It’s early days but they think that at least some of it comes down to personality. Boredom proneness has been linked with a variety of traits. People who are motivated by pleasure seem to suffer particularly badly. Other personality traits, such as curiosity, are associated with a high boredom threshold. More evidence that boredom has detrimental effects comes from studies of people who are more or less prone to boredom. It seems those who bore easily face poorer prospects in education, their career and even life in general. But of course, boredom itself cannot kill – it’s the things we do to deal with it that may put us in danger. What can we do to alleviate it before it comes to that? Goetz’s group has one suggestion. Working with teenagers, they found that those who ‘approach’ a boring situation – in other words, see that it’s boring and get stuck in anyway – report less boredom than those who try to avoid it by using snacks, TV or social media for distraction.
    
    @@12345@@
    
    Psychologist Francoise Wemelsfelder speculates that our over-connected lifestyles might even be a new source of boredom. ‘In modern human society there is a lot of overstimulation but still a lot of problems finding meaning,’ she says. So instead of seeking yet more mental stimulation, perhaps we should leave our phones alone, and use boredom to motivate us to engage with the world in a more meaningful way.`
  },
  sections: [
    {
      title: `Questions 14-19`,
      instructions: `Reading Passage 2 has six paragraphs, A-F
      Choose the correct heading for each paragraph from the list of headings below.
      
      Write the correct number, i-viii, in boxes 14-19 on your answer sheet.`,
      questions: [
        {
          id: '111',
          type: 'drag and drop passage',
          question: `List of Headings`,
          correctAnswer: 'true',
          headingList: [`The productive outcomes that may result from boredom`,
            `What teachers can do to prevent boredom`,
            `A new explanation and a new cure for boredom`,
            `Problems with a scientific approach to boredom`,
            'my',
            'xi xi xiiii',
            'over the lazy',
          ],
          texts: [['A.', ''], ['B.', ''], ['C.', ''], ['D.', ''], ['Give me ','money.'], ['', 'wowwwwwww'], ['The quick brown fox jumps ', 'dog']]
        },
      ]
    },
  ]
}