export const weightSort = projArr =>{
    const mostLikesOnProj = Math.max(...projArr.map(proj=>proj.likes.length))
    const mostCommentsOnProj = Math.max(...projArr.map(proj=>proj.comments.length))


    const weightedArr = projArr.map((project, index )=> {
      let weight = 0

      const likeCount = project.likes.length
      const commentCount = project.comments.length

      const amountFunded = project.donations.reduce((total, currentProject) => {
        return total + currentProject.amount
      }, 0)

      const fundingCompletetion = (amountFunded/project.goalAmount)*100
      const likeScale = (likeCount/mostLikesOnProj)*100
      const commentScale = (commentCount/mostCommentsOnProj)*100

      likeScale === 100
        ? weight += 6
      : likeScale < 75
        ? weight += 4
      : likeScale < 50
        ? weight +=2
      : likeScale < 25
        ? weight +=1
      : null

      commentScale === 100
        ? weight += 5
      : commentScale < 75
        ? weight += 2
      : commentScale < 50
        ? weight +=1
      : commentScale < 25
        ? weight +=0
      : null

      fundingCompletetion >= 100
        ? weight += 12
      : fundingCompletetion > 75
        ? weight += 8
      : fundingCompletetion > 50
        ? weight += 4
      : fundingCompletetion > 25
        ? weight += 2
      : weight += 1
      project.weight = weight


    //   return {weight, likeScale, commentScale, fundingCompletetion}
    return project
    })

    return weightedArr.sort((a,b)=> b.weight - a.weight)
  }
