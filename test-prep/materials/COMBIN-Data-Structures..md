<div class="ic-alerts">

</div>
<div class="print-header navbar-print-header navbar navbar-inverse">
<div class="navbar-header">
<span class="navbar-brand"> <img src="https://www.interviewcake.com/static//images/cake_white_20_21.png" class="logo" /> Interview Cake </span>
</div>
</div>
<div class="navbar navbar-normal navbar-inverse" data-role="navigation" data-ng-controller="HeaderCtrl" data-language="python">
<div class="navbar-header">
<span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span>
<a href="https://www.interviewcake.com/" class="navbar-brand">Interview Cake</a>
</div>
<div class="collapse navbar-collapse">
<ul>
<li><a href="#" class="dropdown-toggle">Interview Tips <span class="caret"></span></a>
![](image/COMBIN-Data-Structures./1604084844887.png)
</ul>
<ul>
<li><a href="https://www.interviewcake.com/upgrade" class="upgrade">Get the full course <span class="glyphicon glyphicon-chevron-right full-access-badge"></span></a></li>
<li><a href="#" class="dropdown-toggle"><span data-ng-bind="contentLanguage.display_name"></span> <span class="caret"></span></a>
<ul>
<li><a href="#"></a></li>
</ul></li>
<li><p><span class="glyphicon glyphicon-star full-access-badge" data-ng-show="currentUser.is_full_access"></span></p></li>
<li><a href="#">Log out</a></li>
<li><a href="#">Log in to save progress</a></li>
</ul>
</div>
</div>
<div class="below-nav">
<div class="article concept-page" data-ng-controller="PrepSeshApp">
<div class="section-wrapper heading">
<section>
<h1 id="breadth-first-search-bfs-and-breadth-first-traversal">Breadth-First Search (BFS) and Breadth-First Traversal</h1>
</section>
</div>
<section class="article-content concept-body">
<div class="section-wrapper shaded">
<section>
<div>
<p><strong>Breadth-first search</strong> (BFS) is a method for exploring a tree or graph. In a BFS, you first explore all the nodes one step away, then all the nodes two steps away, etc.</p>
<p>Breadth-first search is like throwing a stone in the center of a pond. The nodes you explore "ripple out" from the starting point.</p>
<p>Here's a how a BFS would traverse this tree, starting with the root:</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/breadth_first_search_root.svg?bust=209" alt="A 4-row binary tree represented by circles connected with lines. Our breadth-first search has us start at the root node at the top of the tree." width="197" height="152" />
</div>
<p>We'd visit all the immediate children (all the nodes that're one step away from our starting node):</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/breadth_first_search_first_level.svg?bust=209" alt="The same 4-row binary tree with all nodes at depth 1 (second row) bolded after being visited." width="197" height="152" />
</div>
<p>Then we'd move on to all <em>those</em> nodes' children (all the nodes that're <em>two steps</em> away from our starting node):</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/breadth_first_search_second_level.svg?bust=209" alt="The same 4-row binary tree with all nodes at depth 2 (third row) bolded after being visited." width="197" height="152" />
</div>
<p>And so on:</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/breadth_first_search_third_level.svg?bust=209" alt="The same 4-row binary tree with all nodes at depth 3 (fourth and final row) bolded after being visited." width="197" height="152" />
</div>
<p>Until we reach the end.</p>
<p>Breadth-first search is often compared with <strong>depth-first search</strong>.</p>
<p>Advantages:</p>
<ul>
<li>A BFS will find the <strong>shortest path</strong> between the starting point and any other reachable node. A depth-first search will not necessarily find the shortest path.</li>
</ul>
<p>Disadvantages</p>
<ul>
<li>A BFS on a binary tree <em>generally</em> requires more memory than a DFS.</li>
</ul>
</div>
</section>
</div>
<div class="section-wrapper slim">
<section>
<div class="share-btns">
<a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.interviewcake.com/concept/python/bfs" class="custom-share facebook-share"><em></em> Share</a> <a href="https://twitter.com/intent/tweet?text=Breadth-First%20Search%20%28BFS%29%20and%20Breadth-First%20Traversal&amp;via=interviewcake&amp;related=interviewcake&amp;url=https%3A//www.interviewcake.com/concept/python/bfs" class="custom-share twitter-share"><em></em> Tweet</a> <a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A//www.interviewcake.com/concept/python/bfs&amp;title=&amp;summary=Breadth-First%20Search%20%28BFS%29%20and%20Breadth-First%20Traversal&amp;source=Interview%20Cake" class="custom-share linkedin-share"><em></em> Share</a>
</div>
<div class="see-also">
<h3 id="see-also">See also:</h3>
<ul>
<li><a href="https://www.interviewcake.com/concept/python/dfs">Depth-First Search (DFS) and Depth-First Traversal</a></li>
<li><a href="https://www.interviewcake.com/concept/python/binary-tree">Binary Tree</a></li>
<li><a href="https://www.interviewcake.com/concept/python/graph">Graph</a></li>
</ul>
</div>
<div class="bottom-email-cta-box" data-blocks-news-drawer-when-visible="">

<div class="article" data-ng-controller="PrepSeshApp">
<div>
<div class="section-wrapper heading">
<section>
<h1 id="big-o-notation">Big O Notation</h1>
<h2 id="using-not-boring-math-to-measure-codes-efficiency">Using not-boring math to measure code's efficiency</h2>
<div id="crash-course-email" class="interstitial-cta-box border" data-blocks-news-drawer-when-visible="">
<h3 id="get-the-7-day-crash-course" class="text-center">Get the 7-day crash course!</h3>
<p>In this free email course, I'll teach you the right <em>way of thinking</em> for breaking down tricky algorithmic coding interview questions.</p>
<div class="email-input">
<p>No CS degree necessary.</p>
<div id="email_magnet_big-o-header" class="email-magnet" data-ng-controller="EmailNewsletterSignupCtrl" data-campaign="intro_course">
<div class="error" data-ng-cloak="" data-ng-show="failureMessage" data-ng-bind="failureMessage">

</div>
<div class="input-group input-group-lg email-magnet-one-liner">
<span class="input-group-btn"> </span>
</div>
<p>No spam, ever.</p>
<div class="success" data-ng-cloak="" data-ng-show="success">
<p><strong>You're in!</strong></p>
</div>
</div>
</div>
</div>
</section>
</div>
<section class="article-content">
<div class="section-wrapper shaded">
<section>
<div class="blue-arrow-sidebar" data-sidebar-sticker="">
<div class="header">
<h3 id="get-the-coding-interview-crash-course">Get the coding interview crash course</h3>
</div>
<p>In this free email course, I'll teach you the right <em>way of thinking</em> for breaking down tricky algorithmic coding interview questions.</p>
<p>7 days. One short-but-helpful email a day. Unsubscribe whenever.</p>
<p>No CS degree necessary.</p>
<div id="email_magnet_big-o-sidebar-sticky" class="email-magnet" data-ng-controller="EmailNewsletterSignupCtrl" data-campaign="intro_course">
<div class="email-magnet-2-row-v1">
<div class="error" data-ng-cloak="" data-ng-show="failureMessage" data-ng-bind="failureMessage">

</div>
</div>
<p>No spam, ever. Easy unsubscribe.</p>
<div class="success" data-ng-cloak="" data-ng-show="success">
<p>You're in! Head over to your email inbox right now to read day one!</p>
</div>
</div>
</div>
<h2 id="the-idea-behind-big-o-notation">The idea behind big O notation</h2>
<p><strong>Big O notation is the language we use for talking about how long an algorithm takes to run</strong>. It's how we compare the efficiency of different approaches to a problem.</p>
<p>It's like math except it's an <strong>awesome, not-boring kind of math</strong> where you get to wave your hands through the details and just focus on what's <em>basically</em> happening.</p>
<p>With big O notation we express the runtime in terms of—brace yourself—<em>how quickly it grows relative to the input, as the input gets arbitrarily large</em>.</p>
<p>Let's break that down:</p>
<ol>
<li><strong>how quickly the runtime grows</strong>—It's hard to pin down the <em>exact runtime</em> of an algorithm. It depends on the speed of the processor, what else the computer is running, etc. So instead of talking about the runtime directly, we use big O notation to talk about <em>how quickly the runtime grows</em>.</li>
<li><strong>relative to the input</strong>—If we were measuring our runtime directly, we could express our speed in seconds. Since we're measuring <em>how quickly our runtime grows</em>, we need to express our speed in terms of...something else. With Big O notation, we use the size of the input, which we call "<span data-math="">n</span>." So we can say things like the runtime grows "on the order of the size of the input" (<span data-complexity="n"></span>) or "on the order of the square of the size of the input" (<span data-complexity="n^2"></span>).</li>
<li><strong>as the input gets arbitrarily large</strong>—Our algorithm may have steps that seem expensive when <span data-math="">n</span> is small but are eclipsed eventually by other steps as <span data-math="">n</span> gets huge. For big O analysis, we care most about the stuff that grows fastest as the input grows, because everything else is quickly eclipsed as <span data-math="">n</span> gets very large. (If you know what an asymptote is, you might see why "big O analysis" is sometimes called "asymptotic analysis.")</li>
</ol>
<p>If this seems abstract so far, that's because it is. Let's look at some examples.</p>
</section>
</div>
<div id="some-examples" class="section-wrapper">
<section>
<h2 id="some-examples">Some examples</h2>
<div class="clearfix">

</div>
<div data-code-block="article__big-o-notation-time-and-space-complexity__o-one" data-language="python" data-translation-highlighting="dynamic" data-actual-language="python">
def print_first_item(items): print items[0]
</div>
<p><strong>This <span data-words="article__big-o-notation-time-and-space-complexity__function">function</span> runs in <span data-complexity="1"></span> time (or "constant time") relative to its input</strong>. The input <span data-words="article__big-o-notation-time-and-space-complexity__standard-list">list</span> could be 1 item or 1,000 items, but this <span data-words="article__big-o-notation-time-and-space-complexity__function">function</span> would still just require one "step."</p>
<div class="clearfix">

</div>
<div data-code-block="article__big-o-notation-time-and-space-complexity__o-n" data-language="python" data-translation-highlighting="dynamic" data-actual-language="python">
def print_all_items(items): for item in items: print item
</div>
<p><strong>This <span data-words="article__big-o-notation-time-and-space-complexity__function">function</span> runs in <span data-complexity="n"></span> time (or "linear time"), where <span data-math="">n</span> is the number of items in the <span data-words="article__big-o-notation-time-and-space-complexity__standard-list">list</span></strong>. If the <span data-words="article__big-o-notation-time-and-space-complexity__standard-list">list</span> has 10 items, we have to print 10 times. If it has 1,000 items, we have to print 1,000 times.</p>
<div class="clearfix">

</div>
<div data-code-block="article__big-o-notation-time-and-space-complexity__o-n-squared" data-language="python" data-translation-highlighting="dynamic" data-actual-language="python">
def print_all_possible_ordered_pairs(items): for first_item in items: for second_item in items: print first_item, second_item
</div>
<p>Here we're nesting two loops. If our <span data-words="article__big-o-notation-time-and-space-complexity__standard-list">list</span> has <span data-math="">n</span> items, our outer loop runs <span data-math="">n</span> times and our inner loop runs <em><span data-math="">n</span> times for each iteration of the outer loop</em>, giving us <span data-math="">n^2</span> total prints. Thus <strong>this <span data-words="article__big-o-notation-time-and-space-complexity__function">function</span> runs in <span data-complexity="n^2"></span> time (or "quadratic time")</strong>. If the <span data-words="article__big-o-notation-time-and-space-complexity__standard-list">list</span> has 10 items, we have to print 100 times. If it has 1,000 items, we have to print 1,000,000 times.</p>
</section>
</div>
<div id="actual-input" class="section-wrapper shaded">
<section>
<h2 id="n-could-be-the-actual-input-or-the-size-of-the-input">N could be the <em>actual</em> input, or the <em>size</em> of the input</h2>
<p>Both of these <span data-words="article__big-o-notation-time-and-space-complexity__function">function</span>s have <span data-complexity="n"></span> runtime, even though one takes an integer as its input and the other takes <span data-words="article__big-o-notation-time-and-space-complexity__a-standard-list">a list</span>:</p>
<div class="clearfix">

</div>
<div data-code-block="article__big-o-notation-time-and-space-complexity__actual-input-or-size-of-input" data-language="python" data-translation-highlighting="dynamic" data-actual-language="python">
def say_hi_n_times(n): for time in xrange(n): print "hi" def print_all_items(items): for item in items: print item
</div>
<p>So sometimes <span data-math="">n</span> is an <em>actual number</em> that's an input to our <span data-words="article__big-o-notation-time-and-space-complexity__function">function</span>, and other times <span data-math="">n</span> is the <em>number of items</em> in an input <span data-words="article__big-o-notation-time-and-space-complexity__standard-list">list</span> (or an input map, or an input object, etc.).</p>
</section>
</div>
<div id="drop-the-constants" class="section-wrapper">
<section>
<h2 id="drop-the-constants">Drop the constants</h2>
<p>This is why big O notation <em>rules</em>. When you're calculating the big O complexity of something, you just throw out the constants. So like:</p>
<div class="clearfix">

</div>
<div data-code-block="article__big-o-notation-time-and-space-complexity__drop-constants-simple" data-language="python" data-translation-highlighting="dynamic" data-actual-language="python">
def print_all_items_twice(items): for item in items: print item # Once more, with feeling for item in items: print item
</div>
<p>This is <span data-complexity="2n"></span>, which we just call <span data-complexity="n"></span>.</p>
<div class="clearfix">

</div>
<div data-code-block="article__big-o-notation-time-and-space-complexity__drop-constants-complex" data-language="python" data-translation-highlighting="dynamic" data-actual-language="python">
def print_first_item_then_first_half_then_say_hi_100_times(items): print items[0] middle_index = len(items) / 2 index = 0 while index &lt; middle_index: print items[index] index += 1 for time in xrange(100): print "hi"
</div>
<p>This is <span data-complexity="1 + n/2 + 100"></span>, which we just call <span data-complexity="n"></span>.</p>
<p>Why can we get away with this? Remember, for big O notation we're looking at what happens <strong>as <span data-math="">n</span> gets arbitrarily large</strong>. As <span data-math="">n</span> gets really big, adding 100 or dividing by 2 has a decreasingly significant effect.</p>
<div class="interstitial-cta-box border">
<p><strong>Keep up the momentum!</strong> Sign up to get a data structures and algorithms practice question sent to you every week.</p>
<div class="email-input">
<div id="email_magnet_big-o-interstitial" class="email-magnet" data-ng-controller="EmailNewsletterSignupCtrl" data-campaign="weekly_problem">
<div class="error" data-ng-cloak="" data-ng-show="failureMessage" data-ng-bind="failureMessage">

</div>
<div class="input-group input-group-lg email-magnet-one-liner">
<span class="input-group-btn"> </span>
</div>
<p>No spam, ever. Easy unsubscribe.</p>
<div class="success" data-ng-cloak="" data-ng-show="success">
<p><em>Cool, watch your inbox!</em></p>
</div>
</div>
</div>
</div>
</section>
</div>
<div id="drop-the-less-significant-terms" class="section-wrapper shaded">
<section>
<h2 id="drop-the-less-significant-terms">Drop the less significant terms</h2>
<p>For example:</p>
<div class="clearfix">

</div>
<div data-code-block="article__big-o-notation-time-and-space-complexity__drop-less-significant-terms" data-language="python" data-translation-highlighting="dynamic" data-actual-language="python">
def print_all_numbers_then_all_pair_sums(numbers): print "these are the numbers:" for number in numbers: print number print "and these are their sums:" for first_number in numbers: for second_number in numbers: print first_number + second_number
</div>
<p>Here our runtime is <span data-complexity="n + n^2"></span>, which we just call <span data-complexity="n^2"></span>. Even if it was <span data-complexity="n^2/2 + 100n"></span>, it would still be <span data-complexity="n^2"></span>.</p>
<p>Similarly:</p>
<ul>
<li><span data-complexity="n^3 + 50n^2 + 10000"></span> is <span data-complexity="n^3"></span></li>
<li><span data-complexity="(n + 30) * (n + 5)"></span> is <span data-complexity="n^2"></span></li>
</ul>
<p>Again, we can get away with this because the less significant terms quickly become, well, less significant as <span data-math="">n</span> gets big.</p>
</section>
</div>
<div id="worst-case" class="section-wrapper">
<section>
<h2 id="were-usually-talking-about-the-worst-case">We're usually talking about the "worst case"</h2>
<p>Often this "worst case" stipulation is implied. But sometimes you can impress your interviewer by saying it explicitly.</p>
<p>Sometimes the worst case runtime is significantly worse than the best case runtime:</p>
<div class="clearfix">

</div>
<div data-code-block="article__big-o-notation-time-and-space-complexity__worst-case" data-language="python" data-translation-highlighting="dynamic" data-actual-language="python">
def contains(haystack, needle): # Does the haystack contain the needle? for item in haystack: if item == needle: return True return False
</div>
<p>Here we might have 100 items in our haystack, but the first item might be the needle, in which case we would return in just 1 iteration of our loop.</p>
<p>In general we'd say this is <span data-complexity="n"></span> runtime and the "worst case" part would be implied. But to be more specific we could say this is worst case <span data-complexity="n"></span> and best case <span data-complexity="1"></span> runtime. For some algorithms we can also make rigorous statements about the "average case" runtime.</p>
</section>
</div>
<div id="space-complexity" class="section-wrapper shaded">
<section>
<h2 id="space-complexity-the-final-frontier">Space complexity: the final frontier</h2>
<p>Sometimes we want to optimize for using less memory instead of (or in addition to) using less time. Talking about memory cost (or "space complexity") is very similar to talking about time cost. We simply look at the total size (relative to the size of the input) of any new variables we're allocating.</p>
<p>This <span data-words="article__big-o-notation-time-and-space-complexity__function">function</span> takes <span data-complexity="1"></span> space (we use a fixed number of variables):</p>
<div class="clearfix">

</div>
<div data-code-block="article__big-o-notation-time-and-space-complexity__o-one-space" data-language="python" data-translation-highlighting="dynamic" data-actual-language="python">
def say_hi_n_times(n): for time in xrange(n): print "hi"
</div>
<p>This <span data-words="article__big-o-notation-time-and-space-complexity__function">function</span> takes <span data-complexity="n"></span> space (the size of <span data-var="article__big-o-notation-time-and-space-complexity__hi-array">hi_list</span> scales with the size of the input):</p>
<div class="clearfix">

</div>
<div data-code-block="article__big-o-notation-time-and-space-complexity__o-n-space" data-language="python" data-translation-highlighting="dynamic" data-actual-language="python">
def list_of_hi_n_times(n): hi_list = [] for time in xrange(n): hi_list.append("hi") return hi_list
</div>
<p><strong>Usually when we talk about space complexity, we're talking about <em>additional space</em></strong>, so we don't include space taken up by the inputs. For example, this <span data-words="article__big-o-notation-time-and-space-complexity__function">function</span> takes constant space even though the input has <span data-math="">n</span> items:</p>
<div class="clearfix">

</div>
<div data-code-block="article__big-o-notation-time-and-space-complexity__additional-space" data-language="python" data-translation-highlighting="dynamic" data-actual-language="python">
def get_largest_item(items): largest = float('-inf') for item in items: if item &gt; largest: largest = item return largest
</div>
<p><strong>Sometimes there's a tradeoff between saving time and saving space</strong>, so you have to decide which one you're optimizing for.</p>
</section>
</div>
<div id="conclusion" class="section-wrapper">
<section>
<h2 id="big-o-analysis-is-awesome-except-when-its-not">Big O analysis is awesome except when it's not</h2>
<p>You should make a habit of thinking about the time and space complexity of algorithms <em>as you design them</em>. Before long this'll become second nature, allowing you to see optimizations and potential performance issues right away.</p>
<p>Asymptotic analysis is a powerful tool, but wield it wisely.</p>
<p>Big O ignores constants, but <strong>sometimes the constants matter</strong>. If we have a script that takes 5 hours to run, an optimization that divides the runtime by 5 might not affect big O, but it still saves you 4 hours of waiting.</p>
<p><strong>Beware of premature optimization</strong>. Sometimes optimizing time or space negatively impacts readability or coding time. For a young startup it might be more important to write code that's easy to ship quickly or easy to understand later, even if this means it's less time and space efficient than it could be.</p>
<p>But that doesn't mean startups don't care about big O analysis. A great engineer (startup or otherwise) knows how to strike the right <em>balance</em> between runtime, space, implementation time, maintainability, and readability.</p>
<p><strong>You should develop the <em>skill</em> to see time and space optimizations, as well as the <em>wisdom</em> to judge if those optimizations are worthwhile.</strong></p>

<span class="masthead-pic"> </span>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/binary_search_tree__preview.svg?bust=209" alt="A binary search tree with nodes containing integers. The root node contains the integer 50. Each child node to the left of the root contains integers less than 50, and each child node to the right of the root contains integers greater than 50." width="300" height="200" />
</div>
<h1 id="binary-search-tree">Binary Search Tree</h1>
<div class="type">
<a href="https://www.interviewcake.com/data-structures-reference">Data Structure</a>
</div>
</section>
</div>

</div>

</div>
</div>
</section>
</div>
</section>

</div>
</div>

</div>
</div>
</div>

<div>
<a href="https://www.interviewcake.com/about">About</a> | <a href="https://www.interviewcake.com/privacy-policy">Privacy</a> | <a href="https://www.interviewcake.com/terms-and-conditions">Terms</a>
</div>
</div>

<div id="fb-root">
</div>




</div>
<span class="text text-with-image"> <span class="quotation-mark">"</span>Interview Cake takes the cake when it comes to interview prep. After studying for a little over 2 months, I finally cracked a technical interview and got an offer from my dream financial company! Thanks for all the help! <span class="author"> — Fuad </span> </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div id="loading">
. . .
</div>
<div class="ic-alerts">

</div>




</div>
<div data-code-block="concept__binary-search__iterative-binary-search" data-language="python" data-translation-highlighting="dynamic" data-actual-language="python">
def binary_search(target, nums): """See if target appears in nums""" # We think of floor_index and ceiling_index as "walls" around # the possible positions of our target, so by -1 below we mean # to start our wall "to the left" of the 0th index # (we *don't* mean "the last index") floor_index = -1 ceiling_index = len(nums) # If there isn't at least 1 index between floor and ceiling, # we've run out of guesses and the number must not be present while floor_index + 1 &lt; ceiling_index: # Find the index ~halfway between the floor and ceiling # We use integer division, so we'll never get a "half index" distance = ceiling_index - floor_index half_distance = distance / 2 guess_index = floor_index + half_distance guess_value = nums[guess_index] if guess_value == target: return True if guess_value &gt; target: # Target is to the left, so move ceiling to the left ceiling_index = guess_index else: # Target is to the right, so move floor to the right floor_index = guess_index return False
</div>
<p><strong>How did we know the time cost of binary search was <span data-complexity="lg(n)"></span>?</strong> The only non-constant part of our time cost is the number of times our while loop runs. Each step of our while loop cuts the range (dictated by <span data-var="concept__binary-search__floor-index">floor_index</span> and <span data-var="concept__binary-search__ceiling-index">ceiling_index</span>) in half, until our range has just one element left.</p>
<p><strong>So the question is, "how many times must we divide our original <span data-words="concept__binary-search__standard-list">list</span> size (<span data-math="">n</span>) in half until we get down to 1?"</strong></p>
<span data-block="" data-math=""> n * \frac{1}{2} * \frac{1}{2} * \frac{1}{2} * \frac{1}{2} * ... = 1 </span>
<p>How many <span data-math="">\frac{1}{2}</span>'s are there? We don't know yet, but we can call that number <span data-math="">x</span>:</p>
<span data-block="" data-math=""> n * (\frac{1}{2})^x = 1 </span>
<p>Now we solve for <span data-math="">x</span>:</p>
<span data-block="" data-math=""> n * \frac{1^x}{2^x} = 1 </span> <span data-block="" data-math=""> n * \frac{1}{2^x} = 1 </span> <span data-block="" data-math=""> \frac{n}{2^x} = 1 </span> <span data-block="" data-math=""> n = 2^x </span>
<p>Now to get the <span data-math="">x</span> out of the exponent. How do we do that? Logarithms.</p>
<p><strong>Recall that <span data-math="">\log_{10}{100}</span> means, "what power must we raise 10 to, to get 100"? The answer is 2.</strong></p>
<p>So in this case, if we take the <span data-math="">\log_{2}</span> of both sides...</p>
<span data-block="" data-math=""> \log_{2}{n} = \log_{2}{2^x} </span>
<p>The right hand side asks, "what power must we raise <span data-math="">2</span> to, to get <span data-math="">2^x</span>?" Well, that's just <span data-math="">x</span>.</p>
<span data-block="" data-math=""> \log_{2}{n} = x </span>
<p>So there it is. The number of times we must divide <span data-math="">n</span> in half to get down to 1 is <span data-math="">log_{2}n</span>. So our total time cost is <span data-complexity="lg(n)"></span></p>
<p><strong>Careful: we can only use binary search if the input <span data-words="concept__binary-search__standard-list">list</span> is <em>already sorted</em>.</strong></p>
</div>
</section>
</div>



<section class="article-content concept-body">
<div class="section-wrapper shaded">
<section>
<div>
<p>A <strong>binary tree</strong> is a <strong>tree</strong> where every node has two or fewer children. The children are usually called <span data-var="concept__binary-tree__left-instance-var">left</span> and <span data-var="concept__binary-tree__right-instance-var">right</span>.</p>
<div class="clearfix">
</div>

<div data-code-block="concept__binary-tree__binary-tree-node-class" data-language="python" data-translation-highlighting="dynamic" data-actual-language="python">
class BinaryTreeNode(object): def __init__(self, value): self.value = value self.left = None self.right = None
</div>
<p>This lets us build a structure like this:</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/binary_tree__depth_5.svg?bust=209" alt="A tree represented by circles connected with lines. The root node is on top, and connects to 2 children below it. Each of those children connect to 2 children below them, which all connect to their own 2 children, which all connect to their own 2 children." width="300" height="200" />
</div>
<p>That particular example is special because every level of the tree is completely full. There are no "gaps." We call this kind of tree "<strong>perfect</strong>."</p>
<p>Binary trees have a few interesting properties when they're perfect:</p>
<p><strong>Property 1: the number of total nodes on each "level" doubles as we move down the tree.</strong></p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/binary_tree__depth_5_with_number_of_nodes_labelled.svg?bust=209" alt="A binary tree with 5 rows of nodes. The root node is on top, and every node has 2 children in the row below. Each row is labelled with the number of nodes in the row, which doubles from the top down: 1, 2, 4, 8, 16." width="300" height="200" />
</div>
<p><strong>Property 2: the number of nodes on the last level is equal to the sum of the number of nodes on all other levels (plus 1).</strong> In other words, about <em>half</em> of our nodes are on the last level.</p>
<p>Let's call the number of nodes <span data-math="">n</span>, and the height of the tree <span data-math="">h</span>. <span data-math="">h</span> can also be thought of as the "number of levels."</p>
<p>If we had <span data-math="">h</span>, how could we calculate <span data-math="">n</span>?</p>
<p>Let's just add up the number of nodes on each level! How many nodes are on each level?</p>
<p>If we zero-index the levels, the number of nodes on the <span data-math="">x</span>th level is exactly <span data-math="">2^x</span>.</p>
<ol>
<li>Level <span data-math="">0</span>: <span data-math="">2^0</span> nodes,</li>
<li>Level <span data-math="">1</span>: <span data-math="">2^1</span> nodes,</li>
<li>Level <span data-math="">2</span>: <span data-math="">2^2</span> nodes,</li>
<li>Level <span data-math="">3</span>: <span data-math="">2^3</span> nodes,</li>
<li><em>etc</em></li>
</ol>
<p>So our total number of nodes is:</p>
<span data-block="" data-math="">n = 2^0 + 2^1 + 2^2 + 2^3 + ... + 2^{h-1}</span>
<p>Why only up to <span data-math="">2^{h-1}</span>? Notice that we started counting our levels at 0. So if we have <span data-math="">h</span> levels in total, the last level is actually the "<span data-math="">h-1</span>"-th level. That means the number of nodes on the last level is <span data-math="">2^{h-1}</span>.</p>
<p>But we can simplify. Property 2 tells us that the number of nodes on the last level is (1 more than) half of the total number of nodes, so we can just take the number of nodes on the last level, multiply it by 2, and subtract 1 to get the number of nodes overall. We know the number of nodes on the last level is <span data-math="">2^{h-1}</span>, So:</p>
<span data-block="" data-math="">n = 2^{h-1} * 2 - 1</span> <span data-block="" data-math="">n = 2^{h-1} * 2^1 - 1</span> <span data-block="" data-math="">n = 2^{h-1+1}- 1</span> <span data-block="" data-math="">n = 2^{h} - 1</span>
<p>So that's how we can go from <span data-math="">h</span> to <span data-math="">n</span>. What about the other direction?</p>
<p>We need to bring the <span data-math="">h</span> down from the exponent. That's what logs are for!</p>
<p>First, some quick review. <span data-math="">\log_{10} (100)</span> simply means, <strong>"What power must you raise 10 to in order to get 100?"</strong>. Which is 2, because <span data-math="">10^2 = 100</span>.</p>
<p>We can use logs in algebra to bring variables down from exponents by exploiting the fact that we can simplify <span data-math="">\log_{10}(10^2)</span>. What power must we raise <span data-math="">10</span> to in order to get <span data-math="">10^2</span>? That's easy—it's <span data-math="">2</span>.</p>
<p>So in this case we can take the <span data-math="">\log_{2}</span> of both sides:</p>
<span data-block="" data-math="">n = 2^{h} - 1</span> <span data-block="" data-math="">n + 1 = 2^{h}</span> <span data-block="" data-math="">\log_{2}{((n+1))} = \log_{2}{(2^{h})}</span> <span data-block="" data-math="">\log_{2}{(n+1)} = h</span>
<p>So that's the relationship between height and total nodes in a perfect binary tree.</p>

<section class="article-content">
<div id="ram" class="section-wrapper shaded">
<section>
<div class="blue-arrow-sidebar" data-sidebar-sticker="">
<div class="header">
<h3 id="get-the-coding-interview-crash-course-1">Get the coding interview crash course</h3>
</div>
<p>In this free email course, I'll teach you the right <em>way of thinking</em> for breaking down tricky algorithmic coding interview questions.</p>
<p>7 days. One short-but-helpful email a day. Unsubscribe whenever.</p>
<p>No CS degree necessary.</p>
<div id="email_magnet_sidebar-sticky-cs-for-hackers" class="email-magnet" data-ng-controller="EmailNewsletterSignupCtrl" data-campaign="intro_course">
<div class="email-magnet-2-row-v1">
<div class="error" data-ng-cloak="" data-ng-show="failureMessage" data-ng-bind="failureMessage">

</div>
</div>
<p>No spam, ever. Easy unsubscribe.</p>
<div class="success" data-ng-cloak="" data-ng-show="success">
<p>You're in! Head over to your email inbox right now to read day one!</p>
</div>
</div>
</div>
<h2 id="random-access-memory-ram">Random Access Memory (RAM)</h2>
<p>When a computer is running code, it needs to keep track of <em>variables</em> (numbers, strings, arrays, etc.).</p>
<p>Variables are stored in <strong>random access memory</strong> (<strong>RAM</strong>). We sometimes call RAM "working memory" or just "memory."</p>
<div class="aside">
<p>RAM is <em>not</em> where mp3s and apps get stored. In addition to "memory," your computer has <strong>storage</strong> (sometimes called "persistent storage" or "disk"). While <em>memory</em> is where we keep the variables our <span data-words="article__data-structures-coding-interview__function">function</span>s allocate as they crunch data for us, <em>storage</em> is where we keep <em>files</em> like mp3s, videos, Word documents, and even executable programs or apps.</p>
<p>Memory (or RAM) is faster but has less space, while storage (or "disk") is slower but has more space. A modern laptop might have ~500GB of storage but only ~16GB of RAM.</p>
</div>
<p>Think of RAM like a really tall bookcase with a <em>lot</em> of shelves. Like, <em>billions</em> of shelves.</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__ram_empty_no_indices.svg?bust=209" alt="A column of empty RAM slots." width="125" height="277" />
</div>
<p>It just keeps going down. Again, picture <em>billions</em> of these shelves.</p>
<p>The shelves are numbered.</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__ram_empty_with_indices.svg?bust=209" alt="A column of empty RAM slots with indices." width="125" height="277" />
</div>
<p>We call a shelf's number its <strong>address</strong>.</p>
<p>Each shelf holds 8 <strong>bits</strong>. A <em>bit</em> is a tiny electrical switch that can be turned "on" or "off." But instead of calling it "on" or "off" we call it <span data-code-inline="article__data-structures-coding-interview__one">1</span> or <span data-code-inline="article__data-structures-coding-interview__zero">0</span>.</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__ram_bits.svg?bust=209" alt="A column of RAM slots filled with various bits that make up bytes." width="125" height="277" />
</div>
<p>8 bits is called a <strong>byte</strong>. So each shelf has one byte (8 bits) of storage.</p>
<p>Of course, we also have a processor that does all the real work inside our computer:</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__ram_processor.svg?bust=209" alt="A section of RAM connected to the computer&#39;s processor, which does most of the heavy lifting." width="309" height="277" />
</div>
<p>It's connected to a <strong>memory controller</strong>. The memory controller does the actual reading and writing to and from RAM. It has a <em>direct connection</em> to each shelf of RAM.</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__ram_memory_controller.svg?bust=209" alt="The computer&#39;s processor connected to a memory controller, which does the actual reading and writing to and from RAM." width="309" height="277" />
</div>
<p>That <em>direct connection</em> is important. It means we can access address 0 and then immediately access address 918,873 without having to "climb down" our massive bookshelf of RAM.</p>
<p>That's why we call it Random Access Memory (RAM)—we can <em>Access</em> the bits at any <em>Random</em> address in <em>Memory</em> right away.</p>
<p>Spinning hard drives don't have this "random access" superpower, because there's no direct connection to each byte on the disk. Instead, there's a reader—called a <strong>head</strong>—that moves along the surface of a spinning storage disk (like the needle on a record player). Reading bytes that are far apart takes longer because you have to wait for the head to physically move along the disk.</p>
<p>Even though the memory controller can jump between far-apart memory addresses quickly, programs <em>tend to</em> access memory that's nearby. <strong>So computers are tuned to get an extra speed boost when reading memory addresses that're close to each other</strong>. Here's how it works:</p>
<p>The processor has a <strong>cache</strong> where it stores a copy of stuff it's recently read from RAM.</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__ram_cache.svg?bust=209" alt="A series of caches inside of the memory controller, where the processor stores what it has recently read from RAM." width="309" height="277" />
</div>
<p>Actually, it has a <em>series</em> of caches. But we can picture them all lumped together as one cache like this.</p>
<p>This cache is much faster to read from than RAM, so the processor saves time whenever it can read something from cache instead of going out to RAM.</p>
<p><strong>When the processor asks for the contents of a given memory address, the memory controller <em>also</em> sends the contents of a handful of <em>nearby</em> memory addresses.</strong> And the processor puts <em>all</em> of it in the cache.</p>
<p>So if the processor asks for the contents of address 951, then 952, then 953, then 954...it'll go out to RAM once for that first read, and the subsequent reads will come straight from the super-fast cache.</p>
<p>But if the processor asks to read address 951, then address 362, then address 419...then the cache won't help, and it'll have to go all the way out to RAM for each read.</p>
<p>So reading from sequential memory addresses is faster than jumping around.</p>
</section>
</div>
<div id="binary-numbers" class="section-wrapper">
<section>
<h2 id="binary-numbers">Binary numbers</h2>
<p>Let's put those bits to use. Let's store some stuff. Starting with numbers.</p>
<p>The number system we usually use (the one you probably learned in elementary school) is called <strong>base 10</strong>, because each digit has <em>ten</em> possible values (1, 2, 3, 4, 5, 6, 7, 8, 9, and 0).</p>
<p>But computers don't have digits with ten possible values. They have <em>bits</em> with <em>two</em> possible values. So they use <strong>base 2</strong> numbers.</p>
<p>Base 10 is also called <strong>decimal</strong>. Base 2 is also called <strong>binary</strong>.</p>
<p>To understand binary, let's take a closer look at how decimal numbers work. Take the number "101" in decimal:</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__binary_numbers_base_10_101.svg?bust=209" alt="In base 10, the digits 101 represent 1 hundred, 0 tens, and 1 one." width="115" height="50" />
</div>
<p>Notice we have two "1"s here, but they don't <em>mean</em> the same thing. The leftmost "1" <em>means</em> 100, and the rightmost "1" <em>means</em> 1. That's because the leftmost "1" is in the hundreds place, while the rightmost "1" is in the ones place. And the "0" between them is in the tens place.</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__binary_numbers_base_10_digits.svg?bust=209" alt="In base 10, the digits 101 represent 1 hundred, 0 tens, and 1 one." width="341" height="100" />
</div>
<p><strong>So this "101" in base 10 is telling us we have "1 hundred, 0 tens, and 1 one."</strong></p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__binary_numbers_base_10.svg?bust=209" alt="In base 10, the digits 101 represent 1 hundred, 0 tens, and 1 one, which add to give the value one hundred and one." width="341" height="199" />
</div>
<p>Notice how the <em>places</em> in base 10 (ones place, tens place, hundreds place, etc.) are <em>sequential powers of 10</em>:</p>
<ul>
<li><span data-math=""> 10^0=1 </span></li>
<li><span data-math=""> 10^1=10 </span></li>
<li><span data-math=""> 10^2=100 </span></li>
<li><span data-math=""> 10^3=1000 </span></li>
<li>etc.</li>
</ul>
<p><strong>The places in <em>binary</em> (base 2) are sequential powers of <em>2</em>:</strong></p>
<ul>
<li><span data-math="">2^0=1</span></li>
<li><span data-math="">2^1=2</span></li>
<li><span data-math="">2^2=4</span></li>
<li><span data-math="">2^3=8</span></li>
<li>etc.</li>
</ul>
<p>So let's take that same "101" but this time let's read it as a <em>binary</em> number:</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__binary_numbers_base_2_digits.svg?bust=209" alt="In base 2, the digits 101 represent 1 four, 0 twos, and 1 one." width="341" height="100" />
</div>
<p>Reading this from right to left: we have a 1 in the ones place, a 0 in the twos place, and a 1 in the fours place. So our total is 4 + 0 + 1 which is 5.</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__binary_numbers_base_2.svg?bust=209" alt="In base 2, the digits 101 represent 1 four, 0 twos, and 1 one, which add to give the value five." width="341" height="199" />
</div>
<p>Here's how we'd count up to 12 in binary:</p>
<strong>Decimal</strong>
</section>
</div>
</section>
</div>
</div>
</div>
<p><strong>Binary</strong></p>
<p><span data-math="">0</span></p>
<p>0000</p>
<p><span data-math="">1</span></p>
<p>0001</p>
<p><span data-math="">2</span></p>
<p>0010</p>
<p><span data-math="">3</span></p>
<p>0011</p>
<p><span data-math="">4</span></p>
<p>0100</p>
<p><span data-math="">5</span></p>
<p>0101</p>
<p><span data-math="">6</span></p>
<p>0110</p>
<p><span data-math="">7</span></p>
<p>0111</p>
<p><span data-math="">8</span></p>
<p>1000</p>
<p><span data-math="">9</span></p>
<p>1001</p>
<p><span data-math="">10</span></p>
<p>1010</p>
<p><span data-math="">11</span></p>
<p>1011</p>
<p><span data-math="">12</span></p>
<p>1100</p>
<p>So far we've been talking about <strong>unsigned integers</strong> ("unsigned" means non-negative, and "integer" means a whole number, not a fraction or decimal). Storing other numbers isn't hard though. Here's how some other numbers <em>could</em> be stored:</p>
<p><strong>Fractions:</strong> Store <em>two</em> numbers: the numerator and the denominator.</p>
<p><strong>Decimals:</strong> Also two numbers: 1) the number with the decimal point taken out, and 2) the <em>position</em> where the decimal point goes (how many digits over from the leftmost digit).</p>
<p><strong>Negative Numbers:</strong> Reserve the leftmost bit for expressing the sign of the number. <span data-code-inline="article__data-structures-coding-interview__zero">0</span> for positive and <span data-code-inline="article__data-structures-coding-interview__one">1</span> for negative.</p>
<p>In reality we usually do something slightly fancier for each of these. But these approaches <em>work</em>, and they show how we can express some complex stuff with just <span data-code-inline="article__data-structures-coding-interview__one">1</span>s and <span data-code-inline="article__data-structures-coding-interview__zero">0</span>s.</p>
<div class="aside">
<p>We've talked about base 10 and base 2...you may have also seen <strong>base 16</strong>, also called <strong>hexadecimal</strong> or <strong>hex</strong>.</p>
<p>In hex, our possible values for each digit are 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, and f. Hex numbers are often prefixed with "0x" or "#".</p>
<p>In CSS, colors are sometimes expressed in hex. Interview Cake's signature blue color is "#5bc0de".</p>
</div>
<div id="fixed-width-nums" class="section-wrapper shaded">
<section>
<h2 id="fixed-width-integers">Fixed-width integers</h2>
<p>How many different numbers can we express with 1 byte (8 bits)?</p>
<p><span data-math="">2^8=256</span> different numbers. <span data-concept="bits-number-of-possibilities"><em>How did we know to take <span data-math="">2^8</span>?</em></span></p>
<div class="aside">
<p>What happens if we have the number 255 in an 8-bit unsigned integer (<span data-code-inline="article__data-structures-coding-interview__one-one-one-one-one-one-one-one">1111 1111</span> in binary) and we add 1? The answer (256) needs a 9th bit (<span data-code-inline="article__data-structures-coding-interview__one-zero-zero-zero-zero-zero-zero-zero-zero">1 0000 0000</span>). But we only have 8 bits!</p>
<p>This is called an <strong>integer overflow</strong>. At best, we might just get an error. At worst, our computer might compute the correct answer but then just throw out the 9th bit, giving us <em>zero</em> (<span data-code-inline="article__data-structures-coding-interview__zero-zero-zero-zero-zero-zero-zero-zero">0000 0000</span>) instead of 256 (<span data-code-inline="article__data-structures-coding-interview__one-zero-zero-zero-zero-zero-zero-zero-zero">1 0000 0000</span>)! (<span data-words="article__data-structures-coding-interview__how-overflow-is-handled">Python actually notices that the result won't fit and automatically allocates more bits to store the larger number.</span>)</p>
</div>
<p>The 256 possibilities we get with 1 byte are pretty limiting. So <strong>we usually use 4 or 8 bytes (32 or 64 bits) for storing integers</strong>.</p>
<ul>
<li>32-bit integers have <span data-math="">2^{32}</span> possible values—more than <em>4 billion</em></li>
<li>64-bit integers have <span data-math="">2^{64}</span> possible values—more than <em>10 billion billion</em> (<span data-math="">10^{19}</span>).</li>
</ul>
<div class="aside">
<p><strong>"How come I've never had to think about how many bits my integers are?"</strong> Maybe you <em>have</em> but just didn't know it.</p>
<p>Have you ever noticed how in some languages (<span data-words="article__data-structures-coding-interview__languages-with-different-integer-types">like Java and C</span>) sometimes numbers are <span data-code-inline="article__data-structures-coding-interview__integer">Integer</span>s and sometimes they're <span data-code-inline="article__data-structures-coding-interview__long">Long</span>s? The difference is the number of bits (in Java, <span data-code-inline="article__data-structures-coding-interview__integer">Integer</span>s are 32 bits and <span data-code-inline="article__data-structures-coding-interview__long">Long</span>s are 64).</p>
<p>Ever created a table in SQL? When you specify that a column will hold integers, you have to specify how many bytes: 1 byte (<span data-code-inline="article__data-structures-coding-interview__tinyint">tinyint</span>), 2 bytes (<span data-code-inline="article__data-structures-coding-interview__smallint">smallint</span>), 4 bytes (<span data-code-inline="article__data-structures-coding-interview__int">int</span>), or 8 bytes (<span data-code-inline="article__data-structures-coding-interview__bigint">bigint</span>).</p>
</div>
<p><strong>When is 32 bits not enough? When you're counting views on a viral video</strong>. YouTube famously ran into trouble when the Gangnam Style video hit over <span data-math="">2^{31}</span> views, <a href="http://arstechnica.com/business/2014/12/gangnam-style-overflows-int_max-forces-youtube-to-go-64-bit/">forcing them to upgrade their view counts from 32-bit to 64-bit signed integers</a>.</p>
<p>Most integers are <strong>fixed-width</strong> or <strong>fixed-length</strong>, which means the number of bits they take up doesn't change.</p>
<p>It's usually safe to assume an integer is fixed-width unless you're told otherwise. Variable-size numbers <em>exist</em>, but they're only used in special cases.</p>
<p>If we have a 64-bit fixed-length integer, it doesn't matter if that integer is 0 or 193,457—it still takes up the same amount of space in RAM: 64 bits.</p>
<div class="aside">
<p><strong>Are you familiar with big O notation?</strong> It's a tool we use for talking about how much time an algorithm takes to run or how much space a data structure takes up in RAM. It's pretty simple:</p>
<p><strong><span data-complexity="1"></span></strong> or <strong>constant</strong> means the time or space stays about the same even as the dataset gets bigger and bigger.</p>
<p><strong><span data-complexity="n"></span></strong> or <strong>linear</strong> means the time or space grows proportionally as the dataset grows.</p>
<p>So <span data-complexity="1"></span> space is much smaller than <span data-complexity="n"></span> space. And <span data-complexity="1"></span> <em>time</em> is much faster than <span data-complexity="n"></span> time.</p>
<p>That's all you need for this piece. But if you're curious, you can read <a href="https://www.interviewcake.com/big-o-notation-time-and-space-complexity">our whole big O explainer here</a>.</p>
</div>
<p>In big O notation, we say <strong>fixed-width integers take up <em>constant space</em> or <span data-complexity="1"></span> space.</strong></p>
<p>And <em>because</em> they have a constant number of bits, <strong>most simple operations on fixed-width integers (addition, subtraction, multiplication, division) take constant <em>time</em> (<span data-complexity="1"></span> time)</strong>.</p>
<p>So fixed-width integers are very space efficient and time efficient.</p>
<p>But that efficiency comes at a cost—<em>their values are limited</em>. Specifically, they're limited to <span data-math="">2^n</span> possibilities, where <span data-math="">n</span> is the number of bits.</p>
<p>So there's a tradeoff. As we'll see, that's a trend in data structures—to get a nice property, we'll often have to lose something.</p>
<div class="interstitial-cta-box">
<p>Real quick—is this making sense? Feeling like it's coming together?</p>
<p><strong>Keep up the momentum!</strong> Sign up to get a data structures and algorithms practice question sent to you every week.</p>
<div class="email-input">
<div id="email_magnet_cs-for-hackers-interstitial-1" class="email-magnet" data-ng-controller="EmailNewsletterSignupCtrl" data-campaign="weekly_problem">
<div class="error" data-ng-cloak="" data-ng-show="failureMessage" data-ng-bind="failureMessage">

</div>
<div class="input-group input-group-lg email-magnet-one-liner">
<span class="input-group-btn"> </span>
</div>
<p>No spam, ever. Easy unsubscribe.</p>
<div class="success" data-ng-cloak="" data-ng-show="success">
<p><em>Cool, watch your inbox!</em></p>
</div>
</div>
</div>
</div>
</section>
</div>
<div id="arrays" class="section-wrapper">
<section>
<h2 id="arrays">Arrays</h2>
<p>Ok, so we know how to store individual numbers. Let's talk about storing <em>several numbers</em>.</p>
<p>That's right, things are starting to <em>heat up</em>.</p>
<p>Suppose we wanted to keep a count of how many bottles of kombucha we drink every day.</p>
<p>Let's store each day's kombucha count in an 8-bit, fixed-width, unsigned integer. That should be plenty—we're not likely to get through more than 256 (<span data-math="">2^8</span>) bottles in a <em>single day</em>, right?</p>
<p>And let's store the kombucha counts right next to each other in RAM, starting at memory address 0:</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__array_kombucha_counts.svg?bust=209" alt="A stack of RAM in which we store kombucha counts starting at index 0." width="250" height="310" />
</div>
<p>Bam. That's an <strong>array</strong>. RAM is <em>basically</em> an array already.</p>
<p>Just like with RAM, the elements of an array are numbered. We call that number the <strong>index</strong> of the array element (plural: indices). In <em>this</em> example, each array element's index is the same as its address in RAM.</p>
<p>But that's not usually true. Suppose another program like Spotify had already stored some information at memory address 2:</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__array5_occupied.svg?bust=209" alt="A column of 9 RAM slots representing an array. The row at index 2 is highlighted because it is being used by Spotify." width="250" height="310" />
</div>
<p>We'd have to start our array below it, for example at memory address 3. So index 0 in our array would be at memory address 3, and index 1 would be at memory address 4, etc.:</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__array5.svg?bust=209" alt="A column of 9 RAM slots representing an array. The row at index 2 is highlighted, and the rows at indices 3 through 7 are selected with a bracket." width="250" height="350" />
</div>
<p>Suppose we wanted to get the kombucha count at index 4 in our array. How do we figure out what <em>address in memory</em> to go to? Simple math:</p>
<p>Take the array's starting address (3), add the index we're looking for (4), and that's the address of the item we're looking for. 3 + 4 = 7. In general, for getting the <span data-math="">n</span>th item in our array:</p>
<span data-block="" data-math=""> \text{address of nth item in array} = </span> <span data-block="" data-math=""> \text{address of array start} + n </span>
<p>This works out nicely because the size of the addressed memory slots and the size of each kombucha count are <em>both</em> 1 byte. So a slot in our array corresponds to a slot in RAM.</p>
<p>But that's not always the case. In fact, it's <em>usually not</em> the case. We <em>usually</em> use <em>64-bit</em> integers.</p>
<p>So how do we build an array of <em>64-bit</em> (8 byte) integers on top of our <em>8-bit</em> (1 byte) memory slots?</p>
<p>We simply give each array index <em>8</em> address slots instead of 1:</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__array64_long.svg?bust=209" alt="A column of RAM slots representing an array of 64-bit integers. Every 8 buckets of RAM represents one integer." width="162" height="433" />
</div>
<p>So we can still use simple math to grab the start of the <span data-math="">nth</span> item in our array—just gotta throw in some multiplication:</p>
<span data-block="" data-math=""> \text{address of nth item in array} = </span> <span data-block="" data-math=""> \text{address of array start} + (n * \text{size of each item in bytes}) </span>
<p>Don't worry—adding this multiplication doesn't really slow us down. Remember: addition, subtraction, multiplication, and division of fixed-width integers takes <span data-complexity="1"></span> time. So <em>all</em> the math we're using here to get the address of the <span data-math="">n</span>th item in the array takes <span data-complexity="1"></span> time.</p>
<p>And remember how we said the memory controller has a <em>direct connection</em> to each slot in RAM? That means we can read the stuff at any given memory address in <span data-complexity="1"></span> time.</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__arrays_no_processor_ram_memory_controller.svg?bust=209" alt="A memory controller connected to a section of RAM." width="248" height="279" />
</div>
<p><strong>Together, this means looking up the contents of a given array index is <span data-complexity="1"></span> time.</strong> This fast lookup capability is the most important property of arrays.</p>
<p>But the formula we used to get the address of the <span data-math="">n</span>th item in our array only works <em>if</em>:</p>
<ol>
<li><strong>Each item in the array is the <em>same size</em></strong> (takes up the same number of bytes).</li>
<li><strong>The array is <em>uninterrupted</em> (contiguous) in memory</strong>. There can't be any gaps in the array...like to "skip over" a memory slot Spotify was already using.</li>
</ol>
<p>These things make our formula for finding the <span data-math="">n</span>th item <em>work</em> because they make our array <em>predictable</em>. We can <em>predict</em> exactly where in memory the <span data-math="">n</span>th element of our array will be.</p>
<p>But they also constrain what kinds of things we can put in an array. Every item has to be the same size. And if our array is going to store a <em>lot</em> of stuff, we'll need a <em>bunch</em> of uninterrupted free space in RAM. Which gets hard when most of our RAM is already occupied by other programs (like Spotify).</p>
<p>That's the tradeoff. Arrays have fast lookups (<span data-complexity="1"></span> time), but each item in the array needs to be the same size, and you need a big block of uninterrupted free memory to store the array.</p>
</section>
</div>
<div id="strings" class="section-wrapper shaded">
<section>
<h2 id="strings">Strings</h2>
<p>Okay, let's store some words.</p>
<p>A series of <em>characters</em> (letters, punctuation, etc.) is called a <strong>string</strong>.</p>
<p>We already know one way to store a <em>series of things</em>—arrays. But how can an array store <em>characters</em> instead of numbers?</p>
<p>Easy. Let's define a mapping between numbers and characters. Let's say "A" is 1 (or <span data-code-inline="article__data-structures-coding-interview__zero-zero-zero-zero-zero-zero-zero-one">0000 0001</span> in binary), "B" is 2 (or <span data-code-inline="article__data-structures-coding-interview__zero-zero-zero-zero-zero-zero-one-zero">0000 0010</span> in binary), etc. Bam. Now we have characters.</p>
<p>This mapping of numbers to characters is called a <strong>character encoding</strong>. One common character encoding is "ASCII". Here's how the alphabet is encoded in ASCII:</p>
<div class="ascii-table-wrapper">
<div class="row">
<div class="col-xs-4">
A: 01000001
</div>
<div class="col-xs-4">
S: 01010011
</div>
<div class="col-xs-4">
k: 01101011
</div>
</div>
<div class="row">
<div class="col-xs-4">
B: 01000010
</div>
<div class="col-xs-4">
T: 01010100
</div>
<div class="col-xs-4">
l: 01101100
</div>
</div>
<div class="row">
<div class="col-xs-4">
C: 01000011
</div>
<div class="col-xs-4">
U: 01010101
</div>
<div class="col-xs-4">
m: 01101101
</div>
</div>
<div class="row">
<div class="col-xs-4">
D: 01000100
</div>
<div class="col-xs-4">
V: 01010110
</div>
<div class="col-xs-4">
n: 01111110
</div>
</div>
<div class="row">
<div class="col-xs-4">
E: 01000101
</div>
<div class="col-xs-4">
W: 01010111
</div>
<div class="col-xs-4">
o: 01101111
</div>
</div>
<div class="row">
<div class="col-xs-4">
F: 01000110
</div>
<div class="col-xs-4">
X: 01011000
</div>
<div class="col-xs-4">
p: 01110000
</div>
</div>
<div class="row">
<div class="col-xs-4">
G: 01000111
</div>
<div class="col-xs-4">
Y: 01011001
</div>
<div class="col-xs-4">
q: 01110001
</div>
</div>
<div class="row">
<div class="col-xs-4">
H: 01001000
</div>
<div class="col-xs-4">
Z: 01011010
</div>
<div class="col-xs-4">
r: 01110010
</div>
</div>
<div class="row">
<div class="col-xs-4">
I: 01001001
</div>
<div class="col-xs-4">
a: 01100001
</div>
<div class="col-xs-4">
s: 01110011
</div>
</div>
<div class="row">
<div class="col-xs-4">
J: 01001010
</div>
<div class="col-xs-4">
b: 01100010
</div>
<div class="col-xs-4">
t: 01110100
</div>
</div>
<div class="row">
<div class="col-xs-4">
K: 01001011
</div>
<div class="col-xs-4">
c: 01100011
</div>
<div class="col-xs-4">
u: 01110101
</div>
</div>
<div class="row">
<div class="col-xs-4">
L: 01001100
</div>
<div class="col-xs-4">
d: 01100100
</div>
<div class="col-xs-4">
v: 01110110
</div>
</div>
<div class="row">
<div class="col-xs-4">
M: 01001101
</div>
<div class="col-xs-4">
e: 01100101
</div>
<div class="col-xs-4">
w: 01110111
</div>
</div>
<div class="row">
<div class="col-xs-4">
N: 01001110
</div>
<div class="col-xs-4">
f: 01100110
</div>
<div class="col-xs-4">
x: 01111000
</div>
</div>
<div class="row">
<div class="col-xs-4">
O: 01001111
</div>
<div class="col-xs-4">
g: 01100111
</div>
<div class="col-xs-4">
y: 01111001
</div>
</div>
<div class="row">
<div class="col-xs-4">
P: 01010000
</div>
<div class="col-xs-4">
h: 01101000
</div>
<div class="col-xs-4">
z: 01111010
</div>
</div>
<div class="row">
<div class="col-xs-4">
Q: 01010001
</div>
<div class="col-xs-4">
i: 01101001
</div>
<div class="col-xs-4">

</div>
</div>
<div class="row">
<div class="col-xs-4">
R: 01010010
</div>
<div class="col-xs-4">
j: 01101010
</div>
<div class="col-xs-4">

</div>
</div>
</div>
<p>You get the idea. So since we can express characters as 8-bit integers, we can express <em>strings</em> as <em>arrays</em> of 8-bit <del>numbers</del> characters.</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__strings_nice_array.svg?bust=209" alt="Three illustrations of the string &quot;NICE&quot;: one in binary, one in base 10, and one in ASCII." width="256" height="152" />
</div>
</section>
</div>
<div id="pointers" class="section-wrapper">
<section>
<h2 id="pointers">Pointers</h2>
<p>Remember how we said every item in an array had to be the same size? Let's dig into that a little more.</p>
<p>Suppose we wanted to store a bunch of ideas for baby names. Because we've got some <em>really</em> cute ones.</p>
<p>Each name is a string. Which is really an array. And now we want to store <em>those arrays</em> in an array. <em>Whoa</em>.</p>
<p>Now, what if our baby names have different lengths? That'd violate our rule that all the items in an array need to be the same size!</p>
<p>We could put our baby names in arbitrarily large arrays (say, 13 characters each), and just use a special character to mark the end of the string within each array...</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__pointers_baby_names.svg?bust=209" alt="Strings represented in RAM as arrays of 13 characters, with the end of the strings being denoted by a special &quot;null&quot; character. The last 8 rows are marked as wasted space because the name Bill (along with the null character) only takes up 5 out of 13 available characters." width="262" height="625" />
</div>
<p>"Wigglesworth" is a cute baby name, right?</p>
<p>But look at all that wasted space after "Bill". And what if we wanted to store a string that was <em>more</em> than 13 characters? We'd be out of luck.</p>
<p>There's a better way. Instead of storing the strings right inside our array, let's just put the strings wherever we can fit them in memory. Then we'll have each element in our array hold the <em>address in memory</em> of its corresponding string. Each address is an integer, so really our outer array is just an array of integers. We can call each of these integers a <strong>pointer</strong>, since it points to another spot in memory.</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__pointers_pointer_array.svg?bust=209" alt="An array of names represented in RAM. The names are stored out of order, but an array holds the address in memory of each of name with arrows pointing from the number to the memory address." width="208" height="457" />
</div>
<p>The pointers are marked with a <span data-code-inline="article__data-structures-coding-interview__asterisk">*</span> at the beginning.</p>
<p>Pretty clever, right? This fixes <em>both</em> the disadvantages of arrays:</p>
<ol>
<li>The items don't have to be the same length—each string can be as long or as short as we want.</li>
<li>We don't need enough uninterrupted free memory to store all our strings next to each other—we can place each of them separately, wherever there's space in RAM.</li>
</ol>
<p>We fixed it! No more tradeoffs. Right?</p>
<p>Nope. Now we have a <em>new</em> tradeoff:</p>
<p>Remember how the memory controller sends the contents of <em>nearby</em> memory addresses to the processor with each read? And the processor caches them? So reading sequential addresses in RAM is <em>faster</em> because we can get most of those reads right from the cache?</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__ram_cache.svg?bust=209" alt="A series of caches inside of the memory controller, where the processor stores what it has recently read from RAM." width="309" height="277" />
</div>
<p>Our original array was very <strong>cache-friendly</strong>, because everything was sequential. So reading from the 0th index, then the 1st index, then the 2nd, etc. got an extra speedup from the processor cache.</p>
<p><strong>But the pointers in this array make it <em>not</em> cache-friendly</strong>, because the baby names are scattered randomly around RAM. So reading from the 0th index, then the 1st index, etc. doesn't get that extra speedup from the cache.</p>
<p>That's the tradeoff. This pointer-based array requires less uninterrupted memory and can accommodate elements that aren't all the same size, <em>but</em> it's <em>slower</em> because it's not cache-friendly.</p>
<p>This slowdown isn't reflected in the big O time cost. Lookups in this pointer-based array are <em>still</em> <span data-complexity="1"></span> time.</p>
</section>
</div>
<div id="dynamic-arrays" class="section-wrapper shaded">
<section>
<h2 id="dynamic-arrays">Dynamic arrays</h2>
<p>Let's build a very simple word processor. What data structure should we use to store the text as our user writes it?</p>
<p>Strings are stored as arrays, right? So we should use an array?</p>
<p>Here's where that gets tricky: <strong>when we allocate an array in a low-level language like <span data-words="article__data-structures-coding-interview__language-with-low-level-array">C or Java</span>, we have to specify upfront <em>how many indices</em> we want our array to have.</strong></p>
<p>There's a reason for this—the computer has to reserve space in memory for the array and commit to not letting anything else use that space. We can't have some other program overwriting the elements in our array!</p>
<p>The computer can't reserve <em>all</em> its memory for a single array. So we have to tell it how much to reserve.</p>
<p>But for our word processor, we don't know ahead of time how long the user's document is going to be! So what can we do?</p>
<p>Just make an array and program it to resize itself when it runs out of space! This is called a <strong>dynamic array</strong>, and it's built on top of a normal array.</p>
<p><span data-words="article__data-structures-coding-interview__languages-with-dynamic-arrays">Python, Ruby, and JavaScript</span> use dynamic arrays for their default array-like data structures. <span data-words="article__data-structures-coding-interview__what-default-dynamic-arrays-are-called">In Python, they're called "lists."</span> Other languages have both. <span data-words="article__data-structures-coding-interview__languages-with-both-array-types">For example, in Java, <span data-code-inline="article__data-structures-coding-interview__array">array</span> is a static array (whose size we have to define ahead of time) and <span data-code-inline="article__data-structures-coding-interview__array-list">ArrayList</span> is a dynamic array</span>.</p>
<p>Here's how it works:</p>
<p>When you allocate a dynamic array, your dynamic array implementation makes an <em>underlying static array</em>. The starting size depends on the implementation—let's say our implementation uses 10 indices:</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__dynamic_arrays_10_indices.svg?bust=209" alt="A blank dynamic array created by default with 10 indices." width="300" height="303" />
</div>
<p>Say you append 4 items to your dynamic array:</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__dynamic_arrays_dear.svg?bust=209" alt="The same dynamic array storing the word &quot;Dear.&quot;" width="300" height="303" />
</div>
<p>At this point, our dynamic array contains 4 items. It has a length of 4. But the <em>underlying array</em> has a length of 10.</p>
<p>We'd say this dynamic array's <strong>size</strong> is 4 and its <strong>capacity</strong> is 10.</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__dynamic_arrays_size_and_capacity.svg?bust=209" alt="Our dynamic array now has a size of 4 and a capacity of 10." width="300" height="303" />
</div>
<p>The dynamic array stores an <span data-var="article__data-structures-coding-interview__end-index">end_index</span> to keep track of where the dynamic array ends and the extra capacity begins.</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__dynamic_arrays_end_index.svg?bust=209" alt="The end_index of our dynamic array is marked at index 3, where the last letter of the word &quot;Dear&quot; is stored." width="300" height="303" />
</div>
<p>If you keep appending, at some point you'll use up the full capacity of the underlying array:</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__dynamic_arrays_array_sweatin.svg?bust=209" alt="After adding 6 characters to form the string &quot;Dear Mothe,&quot; the end_index of our dynamic array is now marked at index 9, meaning the dynamic array is full." width="300" height="303" />
</div>
<p>Next time you append, the dynamic array implementation will do a few things under the hood to make it work:</p>
<p><strong>1. Make a new, bigger array.</strong> Usually twice as big.</p>
<p>Why not just <em>extend</em> the existing array? Because that memory might already be taken. Say we have Spotify open and it's using a handful of memory addresses right after the end of our old array. We'll have to skip that memory and reserve the next 20 uninterrupted memory slots for our new array:</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__dynamic_arrays_new_array.svg?bust=209" alt="A new dynamic array, twice as big as the old dynamic array, is created in order to make more room." width="211" height="614" />
</div>
<p><strong>2. Copy <em>each</em> element from the old array into the new array.</strong></p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__dynamic_arrays_copy_array.svg?bust=209" alt="Each element from the old dynamic array is copied into the new dynamic array." width="211" height="614" />
</div>
<p><strong>3. Free up the old array.</strong> This tells the operating system, "you can use this memory for something else now."</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__dynamic_arrays_free_old_array.svg?bust=209" alt="The old array is forgotten because it is no longer necessary." width="211" height="614" />
</div>
<p><strong>4. Append your new item.</strong></p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__dynamic_arrays_append_item.svg?bust=209" alt="The new element, the letter &quot;r,&quot; is finally appended to our new array." width="211" height="614" />
</div>
<p>We could call these special appends "doubling" appends since they require us to make a new array that's (usually) double the size of the old one.</p>
<p>Appending an item to an array is usually an <span data-complexity="1"></span> time operation, but <strong>a single doubling append is an <span data-complexity="n"></span> time operation since we have to copy all <span data-math="">n</span> items from our array.</strong></p>
<p>Does that mean an append operation on a dynamic array is always worst-case <span data-complexity="n"></span> time? Yes. So if we make an empty dynamic array and append <span data-math="">n</span> items, that has some crazy time cost like <span data-complexity="n^2"></span> or <span data-complexity="n!"></span>?!?! Not quite.</p>
<p>While the time cost of each special <span data-complexity="n"></span> doubling append <em>doubles</em> each time, the <em>number of <span data-complexity="1"></span> appends</em> you get until the <em>next doubling</em> append <em>also</em> doubles. This kind of "cancels out," and we can say <span data-concept="dynamic-array-amortized-analysis-shorter">each append has an <em>average</em> cost or <strong>amortized cost</strong> of <span data-complexity="1"></span>.</span></p>
<p>Given this, in industry we usually wave our hands and say dynamic arrays have a time cost of <span data-complexity="1"></span> for appends, even though strictly speaking that's only true for the <em>average</em> case or the <em>amortized</em> cost.</p>
<p>In an interview, if we were worried about that <span data-complexity="n"></span>-time worst-case cost of appends, we might try to use a normal, non-dynamic array.</p>
<p><strong>The <em>advantage</em> of dynamic arrays over arrays is that you don't have to specify the size ahead of time, but the <em>disadvantage</em> is that some appends can be expensive</strong>. That's the tradeoff.</p>
<p>But what if we wanted the best of both worlds...</p>
</section>
</div>
<div id="linked-lists" class="section-wrapper">
<section>
<h2 id="linked-lists">Linked lists</h2>
<p>Our word processor is definitely going to need fast appends—appending to the document is like the <em>main thing</em> you do with a word processor.</p>
<p>Can we build a data structure that can store a string, has fast appends, <em>and</em> doesn't require you to say how long the string will be ahead of time?</p>
<p>Let's focus first on not having to know the length of our string ahead of time. Remember how we used <em>pointers</em> to get around length issues with our array of baby names?</p>
<p>What if we pushed that idea even further?</p>
<p>What if each <em>character</em> in our string were a <em>two-index array</em> with:</p>
<ol>
<li>the character itself</li>
<li>a pointer to the next character</li>
</ol>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__linked_lists_sample.svg?bust=209" alt="An example of a linked list storing the string &quot;DEAR.&quot; Each element of the linked list is an array composed of two items: a character and a pointer that points to the next element." width="61" height="327" />
</div>
<p>We would call each of these two-item arrays a <strong>node</strong> and we'd call this series of nodes a <strong>linked list</strong>.</p>
<p>Here's how we'd actually implement it in memory:</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__linked_lists_in_memory.svg?bust=209" alt="The same linked list represented in RAM, showing the nodes scattered in memory but connected by pointers." width="129" height="409" />
</div>
<p>Notice how we're free to store our nodes wherever we can find two open slots in memory. They don't have to be next to each other. They don't even have to be <em>in order</em>:</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__linked_lists_in_memory_out_of_order.svg?bust=209" alt="The same linked list represented in RAM. This time the characters are stored out of order to show that the pointers still keep everything in place." width="129" height="409" />
</div>
<p>"But that's not cache-friendly," you may be thinking. Good point! We'll get to that.</p>
<p>The first node of a linked list is called the <strong>head</strong>, and the last node is usually called the <strong>tail</strong>.</p>
<p>Confusingly, some people prefer to use "tail" to refer to <em>everything after the head</em> of a linked list. In an interview it's fine to use either definition. Briefly say which definition you're using, just to be clear.</p>
<p>It's important to have a pointer variable referencing the head of the list—otherwise we'd be unable to find our way back to the start of the list!</p>
<p>We'll also sometimes keep a pointer to the tail. That comes in handy when we want to add something new to the end of the linked list. In fact, let's try that out:</p>
<p>Suppose we had the string "LOG" stored in a linked list:</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__linked_lists_log_string.svg?bust=209" alt="A linked list with head and tail pointers storing the word &quot;LOG.&quot; The *head points to the first character &quot;L,&quot; and the tail points to the last letter &quot;G.&quot;" width="141" height="299" />
</div>
<p>Suppose we wanted to add an "S" to the end, to make it "LOGS". How would we do that?</p>
<p>Easy. We just put it in a new node:</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__linked_lists_log_string_add_node.svg?bust=209" alt="A linked list with head and tail pointers storing the word &quot;LOG.&quot; A new unconnected node storing the character &quot;S&quot; is added to the bottom and bolded." width="200" height="390" />
</div>
<p>And tweak some pointers:</p>
<p>1. Grab the last letter, which is "G". Our <span data-var="article__data-structures-coding-interview__tail">tail</span> pointer lets us do this in <span data-complexity="1"></span> time.</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__linked_lists_logs_string_grab_last_letter.svg?bust=209" alt="A linked list with head and tail pointers storing the word &quot;LOG.&quot; The *tail pointer and the character &quot;G&quot; are bolded." width="200" height="390" />
</div>
<p>2. Point the last letter's <span data-var="article__data-structures-coding-interview__next">next</span> to the letter we're appending ("S").</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__linked_lists_logs_string_point_next.svg?bust=209" alt="A linked list with head and tail pointers storing the word &quot;LOG.&quot; The &quot;G&quot;&#39;s *next pointer is bolded and pointing to the appended &quot;S&quot;." width="200" height="390" />
</div>
<p>3. Update the <span data-var="article__data-structures-coding-interview__tail">tail</span> pointer to point to our <em>new</em> last letter, "S".</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__linked_lists_logs_string_tweak_pointers.svg?bust=209" alt="A linked list with head and tail pointers storing the word &quot;LOGS.&quot; The *tail pointer is now pointed to the new last letter: &quot;S&quot;." width="200" height="390" />
</div>
<p>That's <span data-complexity="1"></span> time.</p>
<p>Why is it <span data-complexity="1"></span> time? Because the runtime doesn't get bigger if the string gets bigger. No matter how many characters are in our string, we still just have to tweak a couple pointers for any append.</p>
<p>Now, what if instead of a linked list, our string had been a <em>dynamic array</em>? We might not have any room at the end, forcing us to do one of those doubling operations to make space:</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__linked_lists_log_string_doubled_array.svg?bust=209" alt="A dynamic array containing the word &quot;LOG&quot; going through a doubling operation to make space for an appended letter." width="231" height="188" />
</div>
<p>So with a dynamic array, our append would have a <em>worst-case</em> time cost of <span data-complexity="n"></span>.</p>
<p><strong>Linked lists have worst-case <span data-complexity="1"></span>-time appends, which is better than the worst-case <span data-complexity="n"></span> time of dynamic arrays.</strong></p>
<p>That <em>worst-case</em> part is important. The <em>average case</em> runtime for appends to linked lists and dynamic arrays is the same: <span data-complexity="1"></span>.</p>
<p>Now, what if we wanted to <em>pre</em>pend something to our string? Let's say we wanted to put a "B" at the beginning.</p>
<p>For our linked list, it's just as easy as appending. Create the node:</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__linked_lists_logs_string_add_node.svg?bust=209" alt="A linked list with head and tail pointers storing the word &quot;LOGS.&quot; A new unconnected node storing the character &quot;B&quot; is added to the top and bolded." width="200" height="478" />
</div>
<p>And tweak some pointers:</p>
<ol>
<li>Point "B"'s <span data-var="article__data-structures-coding-interview__next">next</span> to "L".</li>
<li>Point the <span data-var="article__data-structures-coding-interview__head">head</span> to "B".</li>
</ol>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__linked_lists_blogs_string_tweak_pointers.svg?bust=209" alt="A linked list with head and tail pointers storing the word &quot;LOGS.&quot; The &quot;B&quot;&#39;s *next pointer is bolded and pointing to the letter &quot;L,&quot; and the *head pointer is bolded and pointing to the prepended letter &quot;B&quot;." width="200" height="478" />
</div>
<p>Bam. <span data-complexity="1"></span> time again.</p>
<p>But if our string were a <em>dynamic array</em>...</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__linked_lists_log_string_dynamic_array.svg?bust=209" alt="A dynamic array storing the string &quot;LOGS.&quot;" width="210" height="152" />
</div>
<p>And we wanted to add in that "B":</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__linked_lists_log_string_dynamic_array_add_b.svg?bust=209" alt="A dynamic array storing the string &quot;LOGS.&quot; A bolded &quot;B&quot; is added above the array." width="210" height="182" />
</div>
<p>Eep. We have to <em>make room</em> for the "B"!</p>
<p>We have to move <em>each character</em> one space down:</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__linked_lists_log_string_dynamic_array_move_s.svg?bust=209" alt="A dynamic array storing the string &quot;LOGS&quot; with the letter &quot;B&quot; floating above. The &quot;S&quot; is bolded with an arrow attached showing how the character is being moved one index up." width="210" height="182" />
</div>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__linked_lists_log_string_dynamic_array_move_g.svg?bust=209" alt="A dynamic array storing the string &quot;LOGS&quot; with the letter &quot;B&quot; floating above. The &quot;G&quot; is bolded with an arrow attached showing how the character is being moved one index up." width="210" height="182" />
</div>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__linked_lists_log_string_dynamic_array_move_o.svg?bust=209" alt="A dynamic array storing the string &quot;LOGS&quot; with the letter &quot;B&quot; floating above. The &quot;O&quot; is bolded with an arrow attached showing how the character is being moved one index up." width="210" height="182" />
</div>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__linked_lists_log_string_dynamic_array_move_l.svg?bust=209" alt="A dynamic array storing the string &quot;LOGS&quot; with the letter &quot;B&quot; floating above. The &quot;L&quot; is bolded with an arrow attached showing how the character is being moved one index up." width="210" height="182" />
</div>
<p><em>Now</em> we can drop the "B" in there:</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__linked_lists_log_string_dynamic_array_chars_moved.svg?bust=209" alt="A dynamic array storing the string &quot;LOGS&quot; with the letter &quot;B&quot; floating above. The &quot;B&quot; is bolded with an arrow attached showing how the character is now being placed in the first index." width="210" height="182" />
</div>
<p>What's our time cost here?</p>
<p>It's all in the step where we made room for the first letter. We had to move <em>all <span data-math="">n</span></em> characters in our string. One at a time. That's <span data-complexity="n"></span> time.</p>
<p><strong>So linked lists have faster <em>pre</em>pends (<span data-complexity="1"></span> time) than dynamic arrays (<span data-complexity="n"></span> time).</strong></p>
<p>No "worst case" caveat this time—prepends for dynamic arrays are <em>always</em> <span data-complexity="n"></span> time. And prepends for linked lists are <em>always</em> <span data-complexity="1"></span> time.</p>
<p>These quick appends and prepends for linked lists come from the fact that linked list nodes can go anywhere in memory. They don't have to sit right next to each other the way items in an array do.</p>
<p>So if linked lists are so great, why do we usually store strings in an array? <strong>Because <a href="#constant-time-array-lookups">arrays have <span data-complexity="1"></span>-time lookups</a>.</strong> And those constant-time lookups <em>come from</em> the fact that all the array elements are lined up next to each other in memory.</p>
<p>Lookups with a linked list are more of a process, because we have no way of knowing where the <span data-math="">i</span>th node is in memory. So we have to walk through the linked list node by node, counting as we go, until we hit the <span data-math="">i</span>th item.</p>
<div class="clearfix">

</div>
<div data-code-block="article__data-structures-coding-interview__linked-list-ith-item" data-language="python" data-translation-highlighting="dynamic" data-actual-language="python">
def get_ith_item_in_linked_list(head, i): if i &lt; 0: raise ValueError("i can't be negative: %d" % i) current_node = head current_position = 0 while current_node: if current_position == i: # Found it! return current_node # Move on to the next node current_node = current_node.next current_position += 1 raise ValueError('List has fewer than i + 1 (%d) nodes' % (i + 1))
</div>
<p>That's <span data-math="">i + 1</span> steps down our linked list to get to the <span data-math="">i</span>th node (we made our <span data-words="article__data-structures-coding-interview__function">function</span> zero-based to match indices in arrays). <strong>So linked lists have <span data-complexity="i"></span>-time lookups.</strong> Much slower than the <span data-complexity="1"></span>-time lookups for arrays and dynamic arrays.</p>
<p>Not only that—<strong>walking down a linked list is <em>not</em> cache-friendly.</strong> Because the next node could be <em>anywhere</em> in memory, we don't get any benefit from the processor cache. This means lookups in a linked list are even slower.</p>
<p>So the tradeoff with linked lists is they have faster prepends and faster appends than dynamic arrays, <em>but</em> they have slower lookups.</p>
</section>
</div>
<div id="hash-tables" class="section-wrapper shaded">
<section>
<h2 id="hash-tables">Hash tables</h2>
<p>Quick lookups are often really important. For that reason, we tend to use arrays (<span data-complexity="1"></span>-time lookups) much more often than linked lists (<span data-complexity="i"></span>-time lookups).</p>
<p>For example, suppose we wanted to count how many times each ASCII character appears in <a href="https://raw.githubusercontent.com/GITenberg/The-Tragedy-of-Romeo-and-Juliet_1112/master/1112.txt">Romeo and Juliet</a>. How would we store those counts?</p>
<p>We can use arrays in a clever way here. Remember—characters are just numbers. In ASCII (a common character encoding) 'A' is 65, 'B' is 66, etc.</p>
<p>So we can use the character('s number value) as the <em>index</em> in our array, and store the <em>count</em> for that character <em>at that index</em> in the array:</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__hash_tables_chars_to_ints.svg?bust=209" alt="An array showing indices 63 through 68. To the left of the indices are the ASCII characters that correspond to the numeric indices with arrows pointing from each character to its corresponding number." width="407" height="218" />
</div>
<p>With this array, we can look up (and edit) the count for any character in constant time. Because we can access any index in our array in constant time.</p>
<p>Something interesting is happening here—this array isn't just a list of values. This array is storing <em>two</em> things: characters and counts. The characters are <em>implied</em> by the indices.</p>
<p><strong>So we can think of an array as a <em>table</em> with <em>two columns</em>...except you don't really get to pick the values in one column (the indices)—they're always 0, 1, 2, 3, etc.</strong></p>
<p>But what if we wanted to put <em>any</em> value in that column and still get quick lookups?</p>
<p>Suppose we wanted to count the number of times each <em>word</em> appears in Romeo and Juliet. Can we adapt our array?</p>
<p>Translating a <em>character</em> into an array index was easy. But we'll have to do something more clever to translate a <em>word</em> (a string) into an array index...</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__hash_tables_lies_key_unlabeled.svg?bust=209" alt="A blank array except for the value 20 stored at index 9. To the left the array is the word &quot;lies&quot; with an arrow pointing to the right at diamond with a question mark in the middle. The diamond points to the 9th index of the array." width="406" height="255" />
</div>
<p>Here's one way we could do it:</p>
<p>Grab the number value for each character and add those up.</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__hash_tables_lies_chars.svg?bust=209" alt="The word &quot;lies&quot; in quotes. Arrows point from each character down to their corresponding number values, which are separated by plus signs and shown in sum to equal 429." width="201" height="79" />
</div>
<p>The result is 429. But what if we only have <em>30</em> slots in our array? We'll use a common trick for forcing a number into a specific range: the <span data-concept="modulus">modulus operator (<span data-code-inline="article__data-structures-coding-interview__modulus">%</span>).</span> Modding our sum by 30 ensures we get a whole number that's less than 30 (and at least 0):</p>
<div data-block="" data-math="">
429 \: \% \: 30 = 9
</div>
<p>Bam. That'll get us from a word (or any string) to an array index.</p>
<p>This data structure is called a <strong>hash table</strong> or <strong>hash map</strong>. In our hash table, the <em>counts</em> are the <strong>values</strong> and the <em>words</em> ("lies," etc.) are the <strong>keys</strong> (analogous to the <em>indices</em> in an array). The process we used to translate a key into an array index is called a <strong>hashing <span data-words="article__data-structures-coding-interview__function">function</span></strong>.</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__hash_tables_lies_key_labeled.svg?bust=209" alt="A blank array except for a 20, labeled as the value, stored at index 9. To the left the array is the word &quot;lies,&quot; labeled as the key, with an arrow pointing to the right at diamond with a question mark in the middle, labeled as the hashing function. The diamond points to the 9th index of the array." width="407" height="254" />
</div>
<p>The hashing <span data-words="article__data-structures-coding-interview__function">function</span>s used in modern systems get pretty complicated—the one we used here is a simplified example.</p>
<div class="aside">
<p>Note that our quick lookups are only in one direction—we can quickly get the value for a given key, but the only way to get the key for a given value is to walk through all the values and keys.</p>
<p>Same thing with arrays—we can quickly look up the value at a given index, but the only way to figure out the index for a given value is to walk through the whole array.</p>
</div>
<p>One problem—what if two keys hash to the same index in our array? Look at "lies" and "foes":</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__hash_tables_lies_and_foes_addition.svg?bust=209" alt="The word &quot;lies&quot; in quotes and the word &quot;foes&quot; in quotes. Arrows point from the characters of each word to their corresponding number values. The sum of the characters of both words is shown to equal 429." width="226" height="171" />
</div>
<p>They both sum up to 429! So of course they'll have the same answer when we mod by 30:</p>
<div data-block="" data-math="">
429 \: \% \: 30 = 9
</div>
<p>So our hashing <span data-words="article__data-structures-coding-interview__function">function</span> gives us the same answer for "lies" and "foes." This is called a <strong>hash collision</strong>. There are a few different strategies for dealing with them.</p>
<p>Here's a common one: instead of storing the actual values in our array, let's have each array slot hold a <em>pointer</em> to a <em>linked list</em> holding the counts for all the words that hash to that index:</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__hash_tables_hash_collision.svg?bust=209" alt="An array storing pointers. Three of the pointers have arrows pointing to linked lists to the right of the array." width="322" height="254" />
</div>
<p>One problem—how do we know which count is for "lies" and which is for "foes"? To fix this, we'll store the <em>word</em> as well as the count in each linked list node:</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/cs_for_hackers__hash_tables_hash_collision_key_val.svg?bust=209" alt="An array storing pointers. The pointer at index 9 has an arrow pointing to a linked list to the right of the array. Each linked list node now stores the word as well as its count and a pointer." width="322" height="254" />
</div>
<p>"But wait!" you may be thinking, "Now lookups in our hash table take <span data-complexity="n"></span> time in the worst case, since we have to walk down a linked list." That's true! You could even say that in the worst case <em>every</em> key creates a hash collision, so our whole hash table <em>degrades to a linked list</em>.</p>
<p>In industry though, we usually wave our hands and say <strong>collisions are rare enough that on <em>average</em> lookups in a hash table are <span data-complexity="1"></span> time</strong>. And there are fancy algorithms that keep the number of collisions low and keep the lengths of our linked lists nice and short.</p>
<p>But that's sort of the tradeoff with hash tables. You get fast lookups by key...except <em>some</em> lookups could be slow. And of course, you only get those fast lookups in one direction—looking up the <em>key</em> for a given <em>value</em> still takes <span data-complexity="n"></span> time.</p>
</section>
</div>
<div id="summary" class="section-wrapper">
<section>
<h2 id="summary">Summary</h2>
<p><strong>Arrays</strong> have <span data-complexity="1"></span>-time lookups. But you need enough <em>uninterrupted</em> space in RAM to store the whole array. And the array items need to be the same size.</p>
<p>But if your array stores <strong>pointers</strong> to the actual array items (like we did with our list of baby names), you can get around both those weaknesses. You can store each array item wherever there's space in RAM, and the array items can be different sizes. The tradeoff is that now your array is <em>slower</em> because it's not cache-friendly.</p>
<p>Another problem with arrays is you have to specify their sizes ahead of time. There are two ways to get around this: <strong>dynamic arrays</strong> and <strong>linked lists</strong>. Linked lists have faster appends and prepends than dynamic arrays, but dynamic arrays have faster lookups.</p>
<p>Fast lookups are really useful, especially if you can look things up not just by <em>indices</em> (0, 1, 2, 3, etc.) but by arbitrary <em>keys</em> ("lies", "foes"...any <em>string</em>). That's what <strong>hash tables</strong> are for. The only problem with hash tables is they have to deal with hash collisions, which means <em>some</em> lookups <em>could</em> be a bit slow.</p>
<p><strong>Each data structure has tradeoffs. You can't have it all.</strong></p>
<p>So you have to know <em>what's important</em> in the problem you're working on. What does your data structure need to do <em>quickly</em>? Is it lookups by index? Is it appends or prepends?</p>
<p>Once you know what's important, you can pick the data structure that does it best.</p>
<div class="text-center" style="margin-top:25px;">
<a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.interviewcake.com/article/python/data-structures-coding-interview" class="custom-share facebook-share"><em></em> Share</a> <a href="https://twitter.com/intent/tweet?text=Data%20Structures%20for%20Coding%20Interviews%3A%20No%20computer%20science%20knowledge%20necessary&amp;via=interviewcake&amp;related=interviewcake&amp;url=https%3A//www.interviewcake.com/article/python/data-structures-coding-interview" class="custom-share twitter-share"><em></em> Tweet</a>
</div>
</section>
</div>
<div class="section-wrapper">
<section>
<h2 id="dont-miss-our-next-article">Don't miss our next article!</h2>
<p>Sign up for updates. Free practice problems every week!</p>
<div id="email_magnet_cs-for-hackers-bottom-cta" class="email-magnet" data-ng-controller="EmailNewsletterSignupCtrl" data-campaign="weekly_problem">
<div class="error" data-ng-cloak="" data-ng-show="failureMessage" data-ng-bind="failureMessage">


<div id="loading">
. . .
</div>
<div class="ic-alerts">

</div>




<h1 id="data-structures-reference">Data Structures Reference</h1>
<h2 id="for-coding-interviews-or-computer-science-classes">For coding interviews or computer science classes</h2>
<p>A quick reference of the <a href="article/python/big-o-notation-time-and-space-complexityd41d.html">big O</a> costs and core properties of every data structure.</p>
<div class="sales-copy">

</div>
</section>
</div>
<section class="article-content">
<div id="table-of-contents">
<a href="concept/python/arrayd41d.html"></a>
<div id="section_all_concept_array" class="section-wrapper shaded">
<section>
<div class="container-fluid">
<div class="row">
<div class="col-md-6">
<div class="left-column">
<h2 id="array">Array</h2>
<p>Stores things in order. Has quick lookups by index.</p>
</div>
</div>
<div class="col-md-6 col-diagram">
<div class="diagram fill-container">
<img src="images/svgs/array__previewd51e.svg?bust=209" alt="An array of letters from a to f with numbered indices 0 through 5." width="300" height="220" />
</div>
</div>
</div>
</div>
</section>
</div>
<a href="concept/python/dynamic-arrayd41d.html"></a>
<div id="section_all_concept_dynamic-array" class="section-wrapper">
<section>
<div class="container-fluid">
<div class="row">
<div class="col-md-6">
<div class="left-column">
<h2 id="dynamic-array">Dynamic Array</h2>
<p>An array that automatically grows as you add more items.</p>
</div>
</div>
<div class="col-md-6 col-diagram">
<div class="diagram fill-container">
<img src="images/svgs/dynamic_array__previewd51e.svg?bust=209" alt="The dynamic array has a size of 3 and a capacity of 6." width="300" height="220" />
</div>
</div>
</div>
</div>
</section>
</div>
<a href="concept/python/linked-listd41d.html"></a>
<div id="section_all_concept_linked-list" class="section-wrapper shaded">
<section>
<div class="container-fluid">
<div class="row">
<div class="col-md-6">
<div class="left-column">
<h2 id="linked-list">Linked List</h2>
<p>Also stores things in order. Faster insertions and deletions than arrays, but slower lookups (you have to "walk down" the whole list).</p>
</div>
</div>
<div class="col-md-6 col-diagram">
<div class="diagram fill-container">
<img src="images/svgs/linked_list__previewd51e.svg?bust=209" alt="A linked list with the letters a,b,c,d. The letter a points to b, b points to c and c points to d." width="300" height="250" />
</div>
</div>
</div>
</div>
</section>
</div>
<a href="concept/python/queued41d.html"></a>
<div id="section_all_concept_queue" class="section-wrapper">
<section>
<div class="container-fluid">
<div class="row">
<div class="col-md-6">
<div class="left-column">
<h2 id="queue">Queue</h2>
<p>Like the line outside a busy restaurant. "First come, first served."</p>
</div>
</div>
<div class="col-md-6 col-diagram">
<div class="diagram fill-container">
<img src="images/svgs/queue__previewd51e.svg?bust=209" alt="A queue composed of the letters a, b and c. c is the first (rightmost) item, then b and then a." width="300" height="100" />
</div>
</div>
</div>
</div>
</section>
</div>
<a href="concept/python/stackd41d.html"></a>
<div id="section_all_concept_stack" class="section-wrapper shaded">
<section>
<div class="container-fluid">
<div class="row">
<div class="col-md-6">
<div class="left-column">
<h2 id="stack">Stack</h2>
<p>Like a stack of dirty plates in the sink. The first one you take off the top is the last one you put down.</p>
</div>
</div>
<div class="col-md-6 col-diagram">
<div class="diagram fill-container">
<img src="images/svgs/stack__previewd51e.svg?bust=209" alt="A stack composed of the letters a, b and c. a is the first item and placed at the top of the stack, followed by b and then c." width="300" height="240" />
</div>
</div>
</div>
</div>
</section>
</div>
<a href="concept/python/hash-mapd41d.html"></a>
<div id="section_all_concept_hash-map" class="section-wrapper">
<section>
<div class="container-fluid">
<div class="row">
<div class="col-md-6">
<div class="left-column">
<h2 id="hash-table">Hash Table</h2>
<p>Like an array, except instead of indices you can set arbitrary keys for each value.</p>
</div>
</div>
<div class="col-md-6 col-diagram">
<div class="diagram fill-container">
<img src="images/svgs/hash_table__previewd51e.svg?bust=209" alt="An array that contains 4 keys and corresponding values: key &quot;apple&quot; has value 4, &quot;cherry&quot; has value 2, &quot;pecan&quot; has value 5 and &quot;blueberry&quot; has value 1." width="300" height="180" />
</div>
</div>
</div>
</div>
</section>
</div>
<a href="concept/python/treed41d.html"></a>
<div id="section_all_concept_tree" class="section-wrapper shaded">
<section>
<div class="container-fluid">
<div class="row">
<div class="col-md-6">
<div class="left-column">
<h2 id="tree">Tree</h2>
<p>Good for storing hierarchies. Each node can have "child" nodes.</p>
</div>
</div>
<div class="col-md-6 col-diagram">
<div class="diagram fill-container">
<img src="images/svgs/tree__previewd51e.svg?bust=209" alt="A binary tree with the elements labeled by letters where every level except the last is completely filled and each node has either 0 or 2 children. An element &quot;a&quot; has two childrens &quot;b&quot; and &quot;c&quot;, &quot;b&quot; has &quot;d&quot; and &quot;e&quot;, &quot;d&quot; has &quot;h&quot; and &quot;i&quot;, &quot;e&quot; hasn&#39;t any children, &quot;c&quot; has &quot;f&quot; and &quot;g&quot;." width="300" height="200" />
</div>
</div>
</div>
</div>
</section>
</div>
<a href="concept/python/binary-search-treed41d.html"></a>
<div id="section_all_concept_binary-search-tree" class="section-wrapper">
<section>
<div class="container-fluid">
<div class="row">
<div class="col-md-6">
<div class="left-column">
<h2 id="binary-search-tree-1">Binary Search Tree</h2>
<p>Everything in the left subtree is smaller than the current node, everything in the right subtree is larger. <span data-complexity="lgn"></span> lookups, but only if the tree is balanced!</p>
</div>
</div>
<div class="col-md-6 col-diagram">
<div class="diagram fill-container">
<img src="images/svgs/binary_search_tree__previewd51e.svg?bust=209" alt="A binary search tree with nodes containing integers. The root node contains the integer 50. Each child node to the left of the root contains integers less than 50, and each child node to the right of the root contains integers greater than 50." width="300" height="200" />
</div>
</div>
</div>
</div>
</section>
</div>
<a href="concept/python/graphd41d.html"></a>
<div id="section_all_concept_graph" class="section-wrapper shaded">
<section>
<div class="container-fluid">
<div class="row">
<div class="col-md-6">
<div class="left-column">
<h2 id="graph">Graph</h2>
<p>Good for storing networks, geography, social relationships, etc.</p>
</div>
</div>
<div class="col-md-6 col-diagram">
<div class="diagram fill-container">
<img src="images/svgs/graph__previewd51e.svg?bust=209" alt="A graph organizes four items in an interconnected network." width="300" height="200" />
</div>
</div>
</div>
</div>
</section>
</div>
<a href="concept/python/tried41d.html"></a>
<div id="section_all_concept_trie" class="section-wrapper">
<section>
<div class="container-fluid">
<div class="row">
<div class="col-md-6">
<div class="left-column">
<h2 id="trie">Trie</h2>
<p>Stores a set of strings in a big tree of characters. Good for lookups by prefix. <em>Sometimes</em> saves space.</p>
</div>
</div>
<div class="col-md-6 col-diagram">
<div class="diagram fill-container">
<img src="images/svgs/trie_with_four_stringsd51e.svg?bust=209" alt="The trie has four branches and represents four different words: &quot;POT&quot;, &quot;PAST&quot;, &quot;PASS&quot;, &quot;PART&quot;. All words are sharing parent node &quot;P&quot;. Words &quot;PAST&quot;, &quot;PASS&quot;, &quot;PART&quot; are sharing node &quot;A&quot;. Words &quot;PAST and &quot;PASS&quot; also sharing node &quot;S&quot;." width="300" height="220" />
</div>
</div>
</div>
</div>
</section>
</div>
<a href="concept/python/heapd41d.html"></a>
<div id="section_all_concept_heap" class="section-wrapper shaded">
<section>
<div class="container-fluid">
<div class="row">
<div class="col-md-6">
<div class="left-column">
<h2 id="heap">Heap</h2>
<p>A binary tree where the smallest value is always at the top. Use it to implement a priority queue.</p>
</div>
</div>
<div class="col-md-6 col-diagram">
<div class="diagram fill-container">
<img src="images/svgs/heap_concept_page_diagrams__binary_heapd51e.svg?bust=209" alt="A binary heap is a binary tree where the nodes are organized to so that the smallest value is always at the top." width="300" height="200" />
</div>
</div>
</div>
</div>
</section>
</div>
<a href="concept/python/priority-queued41d.html"></a>
<div id="section_all_concept_priority-queue" class="section-wrapper">
<section>
<div class="container-fluid">
<div class="row">
<div class="col-md-6">
<div class="left-column">
<h2 id="priority-queue">Priority Queue</h2>
<p>A queue where items are ordered by priority.</p>
</div>
</div>
<div class="col-md-6 col-diagram">
<div class="diagram fill-container">
<img src="images/svgs/priority_queued51e.svg?bust=209" alt="An element with high priority which is equal 1 is served before elements with lower priority: 2, 28, 39, 84 and 99. So the new element with priority 2 will be served before an element with priority 28 but after the existing element with priority 2." width="300" height="120" />
</div>
</div>
</div>
</div>
</section>
</div>
<a href="concept/python/bloom-filterd41d.html"></a>
<div id="section_all_concept_bloom-filter" class="section-wrapper shaded">
<section>
<div class="container-fluid">
<div class="row">
<div class="col-md-6">
<div class="left-column">
<h2 id="bloom-filter">Bloom filter</h2>
<p>A constant-space bitmap that lets you quickly check whether or not an item is in a set. Can give false positives.</p>
</div>
</div>
<div class="col-md-6 col-diagram">
<div class="diagram fill-container">
<img src="images/svgs/python__bloom_filter__check_a_word_in_the_setd51e.svg?bust=209" alt="hash(&quot;lemon&quot;) % 8 = 2. The bit at index 2 is O, so &quot;lemon&quot; is DEFINITELY NOT present in the set (true negative)." width="300" height="100" />
</div>
</div>
</div>
</div>
</section>
</div>
<a href="concept/python/lru-cached41d.html"></a>
<div id="section_all_concept_lru-cache" class="section-wrapper">
<section>
<div class="container-fluid">
<div class="row">
<div class="col-md-6">
<div class="left-column">
<h2 id="lru-cache">LRU Cache</h2>
<p>Lets you quickly identify which item hasn't been used for the longest amount of time.</p>
</div>
</div>
<div class="col-md-6 col-diagram">
<div class="diagram fill-container">
<img src="images/svgs/lru_cache__doubly_linked_listd51e.svg?bust=209" alt="Doubly-linked list with a dictionary where each item contains links to both its predecessor and its successor." width="300" height="280" />
</div>
</div>
</div>
</div>
</section>
</div>
</div>
<div class="section-wrapper cta-bottom-section-wrapper">
<section>
<div class="article-share-bottom text-center" style="margin-top: -40px; margin-bottom:100px;">
<a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.interviewcake.com/data-structures-reference" class="custom-share facebook-share"><em></em> Share</a> <a href="https://twitter.com/intent/tweet?text=Data%20structures%20reference%20for%20coding%20interviews%20and%20computer%20science&amp;via=interviewcake&amp;related=interviewcake&amp;url=https%3A//www.interviewcake.com/data-structures-reference" class="custom-share twitter-share"><em></em> Tweet</a> <a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A//www.interviewcake.com/data-structures-reference&amp;title=&amp;summary=Data%20structures%20reference%20for%20coding%20interviews%20and%20computer%20science&amp;source=Interview%20Cake" class="custom-share linkedin-share"><em></em> Share</a>
</div>
<h2 id="get-the-7-day-crash-course-2" class="text-center">Get the 7-day crash course!</h2>
<p>In this free email course, I'll teach you the right <em>way of thinking</em> for breaking down tricky algorithmic coding questions.</p>
<div>
<p>No CS degree necessary.</p>
<div id="email_magnet_dsr-bottom-cta-crash-course" class="email-magnet" data-ng-controller="EmailNewsletterSignupCtrl" data-campaign="intro_course">
<div class="error" data-ng-cloak="" data-ng-show="failureMessage" data-ng-bind="failureMessage">

</div>



<div data-code-block="concept__graph__edge-list" data-language="python" data-translation-highlighting="dynamic" data-actual-language="python">
graph = [[0, 1], [1, 2], [1, 3], [2, 3]]
</div>
<p>Since node <span data-code-inline="concept__graph__three">3</span> has edges to nodes <span data-code-inline="concept__graph__one">1</span> and <span data-code-inline="concept__graph__two">2</span>, <span data-code-inline="concept__graph__one-three-edge-list">[1, 3]</span> and <span data-code-inline="concept__graph__two-three-edge-list">[2, 3]</span> are in the edge list.</p>
<p>Sometimes it's helpful to pair our edge list with a list of all the <em>nodes</em>. For example, what if a node doesn't have <em>any</em> edges connected to it? It wouldn't show up in our edge list at all!</p>
<h3 id="adjacency-list">Adjacency list</h3>
<p>A list where the index represents the node and the value at that index is a list of the node's neighbors:</p>
<div class="clearfix">

</div>
<div data-code-block="concept__graph__adjacency-list" data-language="python" data-translation-highlighting="dynamic" data-actual-language="python">
graph = [ [1], [0, 2, 3], [1, 3], [1, 2], ]
</div>
<p>Since node <span data-code-inline="concept__graph__three">3</span> has edges to nodes <span data-code-inline="concept__graph__one">1</span> and <span data-code-inline="concept__graph__two">2</span>, <span data-code-inline="concept__graph__graph-three">graph[3]</span> has the adjacency list <span data-code-inline="concept__graph__one-two-list">[1, 2]</span>.</p>
<p>We could also use <a href="https://www.interviewcake.com/concept/hash-map"><span data-words="concept__graph__a-hash-table">a dictionary</span></a> where the keys represent the node and the values are the lists of neighbors.</p>
<div class="clearfix">

</div>
<div data-code-block="concept__graph__adjacency-list-hash" data-language="python" data-translation-highlighting="dynamic" data-actual-language="python">
graph = { 0: [1], 1: [0, 2, 3], 2: [1, 3], 3: [1, 2], }
</div>
<p>This would be useful if the nodes were represented by strings, objects, or otherwise didn't map cleanly to <span data-words="concept__graph__standard-list">list</span> indices.</p>
<h3 id="adjacency-matrix">Adjacency matrix</h3>
<p>A matrix of <span data-code-inline="concept__graph__zero">0</span>s and <span data-code-inline="concept__graph__one">1</span>s indicating whether node <span data-var="concept__graph__x">x</span> connects to node <span data-var="concept__graph__y">y</span> (<span data-code-inline="concept__graph__zero">0</span> means no, <span data-code-inline="concept__graph__one">1</span> means yes).</p>
<div class="clearfix">

</div>
<div data-code-block="concept__graph__adjacency-matrix" data-language="python" data-translation-highlighting="dynamic" data-actual-language="python">
graph = [ [0, 1, 0, 0], [1, 0, 1, 1], [0, 1, 0, 1], [0, 1, 1, 0], ]
</div>
<p>Since node <span data-code-inline="concept__graph__three">3</span> has edges to nodes <span data-code-inline="concept__graph__one">1</span> and <span data-code-inline="concept__graph__two">2</span>, <span data-code-inline="concept__graph__graph-three-one">graph[3][1]</span> and <span data-code-inline="concept__graph__graph-three-two">graph[3][2]</span> have value <span data-code-inline="concept__graph__one">1</span>.</p>
</section>
</div>



</div>




</div>
<div class="input-group input-group-lg email-magnet-one-liner">
<span class="input-group-btn"> </span>
</div>
<div class="success" data-ng-cloak="" data-ng-show="success">
<p>You're in! Head over to your email inbox right now to read day one!</p>
</div>
</div>
</div>
</section>
</div>
</section>



</div>
</div>




</div>
</div>
</div>
<div>
<a href="https://www.interviewcake.com/about">About</a> | <a href="https://www.interviewcake.com/privacy-policy">Privacy</a> | <a href="https://www.interviewcake.com/terms-and-conditions">Terms</a>
</div>
</div>
<div id="fb-root">

</div>



</div>
<span class="text text-with-image"> <span class="quotation-mark">"</span><strong>I got offers from 7/8 of the companies at which I interviewed.</strong> After not going through a formal interview process in nearly a decade, your site really helped build my confidence. You're a hero, Parker ;) <span class="author"> — Zak </span> </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div id="loading">
. . .
</div>
<div class="ic-alerts">

</div>
<div class="print-header navbar-print-header navbar navbar-inverse">
<div class="navbar-header">
<span class="navbar-brand"> <img src="https://www.interviewcake.com/static//images/cake_white_20_21.png" class="logo" /> Interview Cake </span>
</div>
</div>
<div class="navbar navbar-normal navbar-inverse" data-role="navigation" data-ng-controller="HeaderCtrl" data-language="python">
<div class="navbar-header">
<span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span>
<a href="https://www.interviewcake.com/" class="navbar-brand">Interview Cake</a>
</div>
<div class="collapse navbar-collapse">
<ul>
<li><a href="#" class="dropdown-toggle">Interview Tips <span class="caret"></span></a>
<ul>
<li><a href="https://www.interviewcake.com/coding-interview-beginner-faq">First coding interview? Start here.</a></li>
<li><a href="https://www.interviewcake.com/coding-interview-tips">General coding interview tips</a></li>
<li><a href="https://www.interviewcake.com/tricks-for-getting-unstuck-programming-interview">How to get un-stuck</a></li>
<li><a href="https://www.interviewcake.com/impostor-syndrome-in-programming-interviews">Beating impostor syndrome</a></li>
<li><a href="https://www.interviewcake.com/24-hours-before-onsite-whiteboard-coding-interview">24 hours before your onsite</a></li>
<li><a href="https://www.interviewcake.com/why-youre-hitting-dead-ends-in-whiteboard-interviews">Why you're hitting dead ends</a></li>
<li><a href="https://www.interviewcake.com/getting-the-most-from-coding-interview-practice-sessions">Best ways to practice</a></li>
<li><a href="https://www.interviewcake.com/coding-interview-timeline-exploding-offers-burnout-negotiation-leverage">Organizing your interview timeline</a></li>
<li><a href="https://www.interviewcake.com/behavioral-questions-programming-interview-story-telling">Mastering behavioral questions</a></li>
<li><a href="https://www.interviewcake.com/coding-interview-faq">Common issues</a></li>
</ul></li>
<li><a href="#" class="dropdown-toggle">Glossary <span class="caret"></span></a>
<ul>
<li><a href="https://www.interviewcake.com/big-o-notation-time-and-space-complexity">Big O Notation: <span data-complexity="n"></span>, <span data-complexity="n^2"></span>, etc</a></li>
<li><a href="https://www.interviewcake.com/article/logarithms">Logarithms</a></li>
<li><a href="https://www.interviewcake.com/concept/triangular-series">Triangular Series</a></li>
<li></li>
<li><a href="https://www.interviewcake.com/concept/binary-search">Binary Search</a></li>
<li><a href="https://www.interviewcake.com/concept/bfs">Breadth-First Search</a></li>
<li><a href="https://www.interviewcake.com/concept/dfs">Depth-First Search</a></li>
<li></li>
<li><a href="https://www.interviewcake.com/concept/brute-force">Brute Force Algorithms</a></li>
<li><a href="https://www.interviewcake.com/concept/greedy">Greedy Algorithms</a></li>
<li><a href="https://www.interviewcake.com/concept/bottom-up">Bottom-Up Algorithms</a></li>
<li><a href="https://www.interviewcake.com/concept/overlapping-subproblems">Overlapping Subproblems</a></li>
<li><a href="https://www.interviewcake.com/concept/memoization">Memoization</a></li>
<li></li>
<li><a href="https://www.interviewcake.com/concept/short-circuit-evaluation">Short Circuit Evaluation</a></li>
<li><a href="https://www.interviewcake.com/concept/garbage-collection">Garbage Collection</a></li>
<li><a href="https://www.interviewcake.com/concept/js-closure">Closure</a></li>
<li><a href="https://www.interviewcake.com/concept/slice">Array Slicing</a></li>
<li><a href="https://www.interviewcake.com/concept/hashing">Hashing</a></li>
<li><a href="https://www.interviewcake.com/concept/mutable">Mutable vs Immutable</a></li>
<li><a href="https://www.interviewcake.com/concept/in-place">In-Place Operation</a></li>
<li></li>
<li><a href="https://www.interviewcake.com/article/data-structures-computer-science">Data Structures Overview</a></li>
<li><a href="https://www.interviewcake.com/concept/array">Array</a></li>
<li><a href="https://www.interviewcake.com/concept/dynamic-array">Dynamic Array</a></li>
<li><a href="https://www.interviewcake.com/concept/hash-map">Hash Table</a></li>
<li><a href="https://www.interviewcake.com/concept/linked-list">Linked List</a></li>
<li><a href="https://www.interviewcake.com/concept/queue">Queue</a></li>
<li><a href="https://www.interviewcake.com/concept/stack">Stack</a></li>
<li><a href="https://www.interviewcake.com/concept/binary-tree">Binary Tree</a></li>
<li><a href="https://www.interviewcake.com/concept/graph">Graph</a></li>
<li></li>
<li><a href="https://www.interviewcake.com/concept/binary-numbers">Binary Numbers</a></li>
<li><a href="https://www.interviewcake.com/concept/and">Bitwise AND</a></li>
<li><a href="https://www.interviewcake.com/concept/or">Bitwise OR</a></li>
<li><a href="https://www.interviewcake.com/concept/xor">Bitwise XOR</a></li>
<li><a href="https://www.interviewcake.com/concept/not">Bitwise NOT</a></li>
<li><a href="https://www.interviewcake.com/concept/bit-shift">Bit Shifting</a></li>
<li><a href="https://www.interviewcake.com/concept/integer-overflow">Integer Overflow</a></li>
</ul></li>
<li><a href="https://www.interviewcake.com/table-of-contents">Full Course</a></li>
</ul>
<ul>
<li><a href="https://www.interviewcake.com/upgrade" class="upgrade">Get the full course <span class="glyphicon glyphicon-chevron-right full-access-badge"></span></a></li>
<li><a href="#" class="dropdown-toggle"><span data-ng-bind="contentLanguage.display_name"></span> <span class="caret"></span></a>
<ul>
<li><a href="#"></a></li>
</ul></li>
<li><p><span class="glyphicon glyphicon-star full-access-badge" data-ng-show="currentUser.is_full_access"></span></p></li>
<li><a href="#">Log out</a></li>
<li><a href="#">Log in to save progress</a></li>
</ul>
</div>
</div>
<div class="below-nav">
<div class="article concept-page" data-ng-controller="PrepSeshApp">
<div 


</div>
<div data-code-block="concept__linked-list__singly-linked-nodes" data-language="python" data-translation-highlighting="dynamic" data-actual-language="python">
a = LinkedListNode(5) b = LinkedListNode(1) c = LinkedListNode(9) a.next = b b.next = c
</div>
</section>
</div>
<div class="section-wrapper shaded">
<section>
<h2 id="doubly-linked-lists">Doubly Linked Lists</h2>
<p>In a basic linked list, each item stores a single pointer to the next element.</p>
<p>In a <strong>doubly linked list</strong>, items have pointers to the next <em>and the previous</em> nodes.</p>
<div class="diagram">
<img src="https://www.interviewcake.com/images/svgs/linked_list__doubly_linked_nodes_and_pointers.svg?bust=209" alt="A doubly-linked list with 3 nodes. The first node has value 5 with a &quot;next&quot; arrow pointing ahead to the second node and a &quot;previous&quot; arrow pointing back to &quot;None.&quot; The second node has value 1 with a &quot;next&quot; arrow pointing ahead to the third node and a &quot;previous&quot; arrow pointing back to the first node. The third node has value 9 with a &quot;next&quot; arrow pointing ahead to &quot;None&quot; and a &quot;previous&quot; arrow pointing back to the second node." width="455" height="145" />
</div>
<p>Doubly linked lists allow us to traverse our list <em>backwards</em>. In a <em>singly</em> linked list, if you just had a pointer to a node in the <em>middle</em> of a list, there would be <em>no way</em> to know what nodes came before it. Not a problem in a doubly linked list.</p>
</section>
</div>
<div class="section-wrapper">
<section>
<h2 id="not-cache-friendly">Not cache-friendly</h2>
<p>Most computers have <a href="https://www.interviewcake.com/article/data-structures-coding-interview#ram">caching systems that make reading from sequential addresses in memory faster than reading from scattered addresses</a>.</p>
<p><a href="https://www.interviewcake.com/concept/array">Array</a> items are always located right next to each other in computer memory, but linked list nodes can be scattered all over.</p>
<p>So iterating through a linked list is usually quite a bit slower than iterating through the items in an array, even though they're both theoretically <span data-complexity="n"></span> time.</p>
</section>
</div>
</div>




