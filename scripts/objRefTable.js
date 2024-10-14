const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.EightDir,
		C3.Behaviors.bound,
		C3.Behaviors.scrollto,
		C3.Behaviors.MoveTo,
		C3.Behaviors.Timer,
		C3.Behaviors.Bullet,
		C3.Behaviors.destroy,
		C3.Plugins.Tilemap,
		C3.Behaviors.solid,
		C3.Plugins.Keyboard,
		C3.Plugins.gamepad,
		C3.Behaviors.Tween,
		C3.Behaviors.Rotate,
		C3.Plugins.TiledBg,
		C3.Plugins.Spritefont2,
		C3.Plugins.Sprite.Cnds.OnCreated,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Acts.AddChild,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.Sprite.Cnds.IsOnScreen,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.System.Exps.tokencount,
		C3.Plugins.System.Cnds.Repeat,
		C3.Behaviors.MoveTo.Acts.MoveToPosition,
		C3.Plugins.System.Exps.int,
		C3.Plugins.System.Exps.tokenat,
		C3.Plugins.System.Exps.loopindex,
		C3.Plugins.Sprite.Cnds.PickChildren,
		C3.Behaviors.MoveTo.Cnds.IsMoving,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Behaviors.MoveTo.Exps.MovingAngle,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Acts.SetAnimSpeed,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Behaviors.MoveTo.Cnds.OnArrived,
		C3.Plugins.System.Cnds.Compare,
		C3.Behaviors.Timer.Acts.StartTimer,
		C3.Behaviors.Timer.Cnds.OnTimer,
		C3.Plugins.Sprite.Acts.SubInstanceVar,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Exps.ImagePointX,
		C3.Plugins.Sprite.Exps.ImagePointY,
		C3.Behaviors.Bullet.Acts.SetAngleOfMotion,
		C3.Plugins.Sprite.Exps.AnimationName,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.gamepad.Cnds.IsButtonDown,
		C3.Behaviors.EightDir.Acts.SimulateControl,
		C3.Behaviors.EightDir.Cnds.IsMoving,
		C3.Behaviors.EightDir.Exps.MovingAngle,
		C3.Plugins.Sprite.Cnds.CompareAnimSpeed,
		C3.Plugins.System.Acts.SetFunctionReturnValue,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Exps.random,
		C3.Behaviors.Bullet.Acts.SetSpeed,
		C3.Behaviors.Bullet.Exps.Speed,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Behaviors.Rotate.Acts.SetSpeed,
		C3.Plugins.System.Cnds.PickByComparison,
		C3.Plugins.Sprite.Cnds.PickDistance,
		C3.Plugins.System.Exps.anglerotate,
		C3.Behaviors.Bullet.Exps.AngleOfMotion,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.System.Acts.Wait,
		C3.Behaviors.Tween.Acts.TweenValue,
		C3.Behaviors.Tween.Cnds.IsPlaying,
		C3.Plugins.Sprite.Acts.SetEffectParam,
		C3.Behaviors.Tween.Exps.Value,
		C3.Plugins.Sprite.Cnds.OnAnimFinished,
		C3.Plugins.System.Acts.RestartLayout
	];
};
self.C3_JsPropNameTable = [
	{"8Direction": 0},
	{BoundToLayout: 0},
	{PlayerCollision: 0},
	{ScrollTo: 0},
	{Camera: 0},
	{Enabled: 0},
	{HeathPoints: 0},
	{NextPositions: 0},
	{Steps: 0},
	{ReloadingTime: 0},
	{MagazineSize: 0},
	{Bullets: 0},
	{FireRate: 0},
	{MoveTo: 0},
	{Timer: 0},
	{EnemyCollision: 0},
	{DamagePlayer: 0},
	{DamageEnemy: 0},
	{Bullet: 0},
	{DestroyOutsideLayout: 0},
	{LevelChunck: 0},
	{Solid: 0},
	{Boundaries: 0},
	{PlayerAnimations: 0},
	{Keyboard: 0},
	{Gamepad: 0},
	{EnemyCleaner: 0},
	{Tween: 0},
	{EnemyAnimations: 0},
	{Explosion: 0},
	{Rotate: 0},
	{Shell: 0},
	{Trees: 0},
	{Text: 0},
	{Water: 0},
	{Number: 0}
];

self.InstanceType = {
	PlayerCollision: class extends self.ISpriteInstance {},
	Camera: class extends self.ISpriteInstance {},
	EnemyCollision: class extends self.ISpriteInstance {},
	Bullet: class extends self.ISpriteInstance {},
	LevelChunck: class extends self.ISpriteInstance {},
	Boundaries: class extends self.ITilemapInstance {},
	PlayerAnimations: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	Gamepad: class extends self.IInstance {},
	EnemyCleaner: class extends self.ISpriteInstance {},
	EnemyAnimations: class extends self.ISpriteInstance {},
	Explosion: class extends self.ISpriteInstance {},
	Shell: class extends self.ISpriteInstance {},
	Trees: class extends self.ITiledBackgroundInstance {},
	Text: class extends self.ISpriteFontInstance {},
	Water: class extends self.ISpriteInstance {}
}