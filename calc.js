function calculateRewards() {
    const vendorBills = Number(document.getElementById('vendorBills').value);
    const mediaAd = Number(document.getElementById('mediaAd').value);
    const corporationSpend = Number(document.getElementById('corporationSpend').value);
    const teamProject = Number(document.getElementById('teamProject').value);
    
    const sum = vendorBills + mediaAd + corporationSpend + teamProject;
    
    const brex = sum * 0.3;
    const stripe = sum * 2.9;
    const amex = sum * 1.3;
    const unlimitedRewards = sum * 1.1;
    const lifetimeRewards = sum * 1.2;
  
    document.getElementById('brexResult').textContent = 'Brex: $' + brex.toFixed(2);
    document.getElementById('stripeResult').textContent = 'Stripe: $' + stripe.toFixed(2);
    document.getElementById('amexResult').textContent = 'Amex: $' + amex.toFixed(2);
    document.getElementById('unlimitedRewards').textContent = 'Unlimited Rewards: $' + unlimitedRewards.toFixed(2);
    document.getElementById('lifetimeRewards').textContent = 'Lifetime Rewards: $' + lifetimeRewards.toFixed(2);
  }
  
  