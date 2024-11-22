const inspirationalData = [
    // 1-10
    {
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
        quote: "生命不在于活得长，而在于活得有意义。",
        source: "——培根"
    },
    {
        image: "https://images.unsplash.com/photo-1433086966358-54c90b3a2cc4",
        quote: "真正的智慧，是把握好自己的分寸。",
        source: "——孔子"
    },
    {
        image: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e",
        quote: "真正的发现之旅不在于寻找新大陆，而在于以新的眼光看待世界。",
        source: "——马塞尔·普鲁斯特"
    },
    {
        image: "https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9",
        quote: "生命如同寓言，其价值不在于长短，而在于内容。",
        source: "——塞涅卡"
    },
    {
        image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94",
        quote: "生活中最重要的不是所处的位置，而是所朝的方向。",
        source: "——霍姆斯"
    },
    {
        image: "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e",
        quote: "友谊是一株需要时间去培养的植物。",
        source: "——伏尔泰"
    },
    {
        image: "https://images.unsplash.com/photo-1501139083538-0139583c060f",
        quote: "真正的朋友是在你需要的时候，总在你身边。",
        source: "——契诃夫"
    },
    {
        image: "https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6",
        quote: "爱是一种力量，让我们超越自己的局限。",
        source: "——歌德"
    },
    {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        quote: "爱是一盏明灯，照亮人生的旅途。",
        source: "——雨果"
    },
    {
        image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",
        quote: "真诚的友谊，犹如清晨的露珠，晶莹剔透。",
        source: "——拜伦"
    },
    {
        image: "https://images.unsplash.com/photo-1531548011962-d0c5d4ce9a0a",
        quote: "人生就是一场修行，你若不勇敢，没人替你坚强。",
        source: "——罗曼·罗兰"
    },
    {
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
        quote: "不要等待机会，而要创造机会。",
        source: "——培根"
    },
    {
        image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
        quote: "成功的秘诀是坚持一个目标不动摇。",
        source: "——本杰明·迪斯雷利"
    },
    {
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
        quote: "最具挑战性的挑战莫过于提升自我。",
        source: "——卡耐基"
    },
    {
        image: "https://images.unsplash.com/photo-1504198322253-cfa87a0ff25f",
        quote: "智者创造机会，而不是等待机会。",
        source: "——弗朗西斯·培根"
    },
    {
        image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e",
        quote: "书籍是人类进步的阶梯。",
        source: "——高尔基"
    },
    {
        image: "https://images.unsplash.com/photo-1495465798138-718f86d1a4bc",
        quote: "时间是最好的老师，但遗憾的是，它最终会杀死它的所有学生。",
        source: "——柏拉图"
    },
    {
        image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32",
        quote: "生活中真正重要的不是我们的境遇，而是我们对境遇的态度。",
        source: "——卢梭"
    },
    {
        image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88",
        quote: "人生如戏，但不要演戏。",
        source: "——莎士比亚"
    },
    {
        image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",
        quote: "我们必须拿我们所有的，去换我们所没有的。",
        source: "——泰戈尔"
    },
    {
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
        quote: "知识就是力量。",
        source: "——培根"
    },
    {
        image: "https://images.unsplash.com/photo-1495908333425-29a1e0918c5f",
        quote: "对自己的信心，是成功的第一秘诀。",
        source: "——爱默生"
    },
    {
        image: "https://images.unsplash.com/photo-1513151233558-d860c5398176",
        quote: "最大的敌人是自己的懒惰。",
        source: "——西塞罗"
    },
    {
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
        quote: "成功不是将来才有的，而是从决定去做的那一刻起，持续累积而成。",
        source: "——海伦·凯勒"
    },
    {
        image: "https://images.unsplash.com/photo-1464082354059-27db6ce50048",
        quote: "人生最大的光荣不在于从不失败，而在于屡仆屡起。",
        source: "——拿破仑"
    },
    {
        image: "https://images.unsplash.com/photo-1473773508845-188df298d2d1",
        quote: "不要问你的国家能为你做什么，而要问你能为国家做什么。",
        source: "——肯尼迪"
    },
    {
        image: "https://images.unsplash.com/photo-1507099985932-47010f61af8d",
        quote: "生活的真谛不在于拥有什么，而在于经历什么。",
        source: "——亚里士多德"
    },
    {
        image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9",
        quote: "人的一生可以有所作为的时机只有一次，那就是现在。",
        source: "——马克·吐温"
    },
    {
        image: "https://images.unsplash.com/photo-1500835556837-99ac94a94552",
        quote: "真理惟一可靠的标准就是永远自相符合。",
        source: "——欧文"
    },
    {
        image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85",
        quote: "人生如戏，但不要演戏。",
        source: "——莎士比亚"
    },
    {
        image: "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85",
        quote: "真正的快乐是永恒的，不会因时间的流逝而改变。",
        source: "——卢梭"
    },
    {
        image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0",
        quote: "人生的价值在于贡献，而不在于索取。",
        source: "——爱因斯坦"
    },
    {
        image: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e",
        quote: "信念是一种强大的力量，它能让不可能变为可能。",
        source: "——南丁格尔"
    },
    {
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
        quote: "勇气不是没有恐惧，而是克服恐惧。",
        source: "——马克·吐温"
    },
    {
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
        quote: "生活中最重要的不是境遇，而是态度。",
        source: "——卢梭"
    },
    {
        image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
        quote: "没有比脚更长的路，没有比人更高的山。",
        source: "——屠格涅夫"
    },
    {
        image: "https://images.unsplash.com/photo-1484100356142-db6ab6244067",
        quote: "人生的意义不在于索取，而在于付出。",
        source: "——泰戈尔"
    },
    {
        image: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7",
        quote: "成功不是偶然的，而是准备加上机会的结果。",
        source: "——富兰克林"
    },
    {
        image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
        quote: "人生最大的敌人是自己的懒惰。",
        source: "——亚里士多德"
    },
    {
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
        quote: "时间是最公平的，它不会给任何人特权。",
        source: "——林肯"
    },
    // 41-50 新增数据
    {
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
        quote: "追求卓越，成功自然随之而来。",
        source: "——亚里士多德"
    },
    {
        image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
        quote: "每一个不曾起舞的日子，都是对生命的辜负。",
        source: "——尼采"
    },
    {
        image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8",
        quote: "人生最困难的时期，恰是最接近成功的时候。",
        source: "——拿破仑·希尔"
    },
    {
        image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9",
        quote: "不要为已消逝之年华叹息，必须正视匆匆溜走的时光。",
        source: "——但丁"
    },
    {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        quote: "生活的真谛在于爱与被爱。",
        source: "——罗曼·罗兰"
    },
    {
        image: "https://images.unsplash.com/photo-1476611338391-6f395a0b4385",
        quote: "读书是在别人思想中发展自己的思想。",
        source: "——鲁巴金"
    },
    {
        image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071",
        quote: "人的价值在于他贡献了什么，而不应当看他取得了什么。",
        source: "——爱因斯坦"
    },
    {
        image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",
        quote: "没有人能够回到过去重新开始，但谁都可以从现在开始，书写一个全然不同的结局。",
        source: "——玛利亚·罗宾逊"
    },
    {
        image: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e",
        quote: "人生最大的幸福是确信自己被爱。",
        source: "——雨果"
    },
    {
        image: "https://images.unsplash.com/photo-1433086966358-54c90b3a2cc4",
        quote: "成功的秘诀是坚持原则，永远不要为了掌声而背弃原则。",
        source: "——罗斯福"
    },
    // 51-60 新增数据
    {
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
        quote: "生命不息，奋斗不止。",
        source: "——居里夫人"
    },
    {
        image: "https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9",
        quote: "最美的风景是在路上。",
        source: "——塞内卡"
    },
    {
        image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94",
        quote: "人生如同故事，重要的不是长度，而是内容。",
        source: "——塞内卡"
    },
    {
        image: "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e",
        quote: "成功的花，人们只惊羡它现时的明艳，然而当初它的芽儿，浸透了奋斗的泪泉，洒遍了牺牲的血雨。",
        source: "——冰心"
    },
    {
        image: "https://images.unsplash.com/photo-1501139083538-0139583c060f",
        quote: "理想的人生是使晚年的你，感谢年轻的你。",
        source: "——罗曼·罗兰"
    },
    {
        image: "https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6",
        quote: "生活中最重要的不是我们身在何处，而是我们朝着什么方向前进。",
        source: "——霍姆斯"
    },
    {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        quote: "一个人的价值，应该看他贡献了什么，而不应当看他取得了什么。",
        source: "——爱因斯坦"
    },
    {
        image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",
        quote: "人生就是一个不断攀登的过程，而不是现成的高峰。",
        source: "——冯学峰"
    },
    {
        image: "https://images.unsplash.com/photo-1531548011962-d0c5d4ce9a0a",
        quote: "只要持续不断地努力，不懈的精进，便可以登上巅峰。",
        source: "——松下幸之助"
    },
    {
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
        quote: "人生的价值，并不是用时间，而是用深度去衡量的。",
        source: "——列夫·托尔斯泰"
    },
    // 61-70 新增数据
    {
        image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
        quote: "生命的意义在于付出，在于给予。",
        source: "——泰戈尔"
    },
    {
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
        quote: "人生最大的错误是不断担心会犯错。",
        source: "——爱默生"
    },
    {
        image: "https://images.unsplash.com/photo-1504198322253-cfa87a0ff25f",
        quote: "成功的关键在于相信自己有成功的能力。",
        source: "——邓拓"
    },
    {
        image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e",
        quote: "人的一生可以平凡，但不可以庸俗。",
        source: "——张晓风"
    },
    {
        image: "https://images.unsplash.com/photo-1495465798138-718f86d1a4bc",
        quote: "生活不可能总是顺心如意，但你要保持希望。",
        source: "——黑格尔"
    },
    {
        image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32",
        quote: "人生的价值，在于对社会的贡献。",
        source: "——孙中山"
    },
    {
        image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88",
        quote: "成功不是终点，失败也不是终结，最重要的是继续前进的勇气。",
        source: "——温斯顿·丘吉尔"
    },
    {
        image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",
        quote: "人生的真正意义在于创造和奉献。",
        source: "——德莱塞"
    },
    {
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
        quote: "生活的艺术在于不断地调整自己。",
        source: "——马克·吐温"
    },
    {
        image: "https://images.unsplash.com/photo-1495908333425-29a1e0918c5f",
        quote: "人生最大的幸福是坚信自己被爱。",
        source: "——雨果"
    },
    // 71-80 新增数据
    {
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        quote: "人的价值不在于他拥有什么，而在于他成为什么。",
        source: "——王阳明"
    },
    {
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
        quote: "不要问生命的意义是什么，应该问你给生命赋予了什么意义。",
        source: "——维克多·弗兰克尔"
    },
    {
        image: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c",
        quote: "生活的真谛不在于活了多少日子，而在于记住了多少美好。",
        source: "——陶立夫"
    },
    {
        image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
        quote: "人生最大的快乐不是实现目标的那一刻，而是追求目标的过程。",
        source: "——梭罗"
    },
    {
        image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
        quote: "生命的长度不在于时间的多少，而在于你如何利用。",
        source: "——蒙田"
    },
    {
        image: "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8",
        quote: "不要因为走得太远，而忘记为什么出发。",
        source: "——纪伯伦"
    },
    {
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
        quote: "成功不是终点，失败也不是终结，唯有勇气才是永恒。",
        source: "——温斯顿·丘吉尔"
    },
    {
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
        quote: "生命中最重要的不是所处的位置，而是所朝的方向。",
        source: "——霍姆斯"
    },
    {
        image: "https://images.unsplash.com/photo-1488085061387-422e29b40080",
        quote: "人生最大的挑战不是超越别人，而是超越自己。",
        source: "——马云"
    },
    {
        image: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1",
        quote: "不要等待完美的时机，因为它永远不会到来。",
        source: "——拿破仑·希尔"
    },
    // 81-90 新增数据
    {
        image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9",
        quote: "成功不是偶然的，而是日复一日累积的结果。",
        source: "——马尔科姆·格拉德威尔"
    },
    {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        quote: "人生的意义在于创造超越自身的价值。",
        source: "——尼采"
    },
    {
        image: "https://images.unsplash.com/photo-1476611338391-6f395a0b4385",
        quote: "真正的智慧是知道自己所不知道的。",
        source: "——苏格拉底"
    },
    {
        image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071",
        quote: "生命的真谛在于付出，而不是索取。",
        source: "——德兰修女"
    },
    {
        image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",
        quote: "每一个今天都是明天的起点。",
        source: "——老子"
    },
    {
        image: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e",
        quote: "人生最重要的不是所站的位置，而是所走的方向。",
        source: "——奥利弗·温德尔·霍姆斯"
    },
    {
        image: "https://images.unsplash.com/photo-1433086966358-54c90b3a2cc4",
        quote: "生活中最困难的不是做出选择，而是坚持选择。",
        source: "——罗素"
    },
    {
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
        quote: "成功的秘诀在于不断努力，即使看不到希望。",
        source: "——爱迪生"
    },
    {
        image: "https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9",
        quote: "人生最大的财富是心灵的充实。",
        source: "——萨特"
    },
    {
        image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94",
        quote: "生活不是等待暴风雨过去，而是学会在雨中翩翩起舞。",
        source: "——甘地"
    },
    // 91-100 新增数据
    {
        image: "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e",
        quote: "人生最大的快乐是实现自我价值。",
        source: "——富兰克林"
    },
    {
        image: "https://images.unsplash.com/photo-1501139083538-0139583c060f",
        quote: "成功的道路上并不拥挤，因为坚持的人不多。",
        source: "——罗伯特·弗罗斯特"
    },
    {
        image: "https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6",
        quote: "生命的价值在于你能给别人带来什么。",
        source: "——爱因斯坦"
    },
    {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        quote: "人生最大的成就是从失败中站起来。",
        source: "——纳尔逊·曼德拉"
    },
    {
        image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",
        quote: "真正的自由是自我约束。",
        source: "——歌德"
    },
    {
        image: "https://images.unsplash.com/photo-1531548011962-d0c5d4ce9a0a",
        quote: "人生最大的勇气是承认自己的不足。",
        source: "——本杰明·富兰克林"
    },
    {
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
        quote: "生活中最重要的是找到自己。",
        source: "——苏格拉底"
    },
    {
        image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
        quote: "成功是一个过程，而不是一个结果。",
        source: "——亚瑟·阿什"
    },
    {
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
        quote: "人生最大的冒险是不冒险。",
        source: "——马克·扎克伯格"
    },
    {
        image: "https://images.unsplash.com/photo-1504198322253-cfa87a0ff25f",
        quote: "生命的意义在于不断探索。",
        source: "——亚里士多德"
    }
    // 后续数据将继续添加...
];
